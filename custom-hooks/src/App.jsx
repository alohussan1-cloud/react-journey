import React, { useState } from 'react'
import UseFetch from './custom hooks/useFetch'
import UserCard from './components/userCard'
import './App.css'

const App = () => {

    const [username, setusername] = useState("")
    const [searchName, setsearchName] = useState("")
    const url = searchName ? `https://api.github.com/users/${searchName}` : null

    const {data, loading, error} = UseFetch(url)

    return (
        <div className="app">
            <div className="search-box">
                <h1>GitHub User Finder</h1>
                <p>Search for a GitHub profile</p>

                <div className="search-container">
                    <input
                        type="text"
                        value={username}
                        placeholder="Enter GitHub username..."
                        onChange={(e) => {
                            setusername(e.target.value)
                        }}
                    />

                    <button onClick={() => {
                        setsearchName(username)
                    }}>
                        Search
                    </button>
                </div>
            </div>

            {loading ? <h3 className="loading">Loading...</h3> : null}

            {data && <UserCard data={data} />}

            {error ? <p className="error">{error}</p> : null}
        </div>
    )
}

export default App