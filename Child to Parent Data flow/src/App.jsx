import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  
   const [name, setname] = useState("Ali Hassan")

  return (
    <div>
     <h1>  Hello I am {name}</h1>
      <Navbar setname= { setname} />
    </div>
  )
}

export default App
