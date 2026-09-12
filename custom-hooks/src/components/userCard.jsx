import React from 'react'
import './userCard.css'

const UserCard = ({data}) => {
    if (!data) return null

    return (
        <div className="user-card">
            <img
                src={data.avatar_url}
                alt={data.login}
                className="user-avatar"
            />

            <h1>{data.name || data.login}</h1>
            <p className="username">@{data.login}</p>

            <p className="bio">
                {data.bio || "No bio available"}
            </p>

            <div className="user-stats">
                <div>
                    <strong>{data.followers}</strong>
                    <span>Followers</span>
                </div>

                <div>
                    <strong>{data.following}</strong>
                    <span>Following</span>
                </div>

                <div>
                    <strong>{data.public_repos}</strong>
                    <span>Repos</span>
                </div>
            </div>

            <p className="location">
                📍 {data.location || "Location not available"}
            </p>

            <a
                href={data.html_url}
                target="_blank"
                rel="noreferrer"
                className="github-button"
            >
                View GitHub Profile
            </a>
        </div>
    )
}

export default UserCard