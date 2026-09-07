import React from 'react'
import Navbar from './Components/Navbar'
import { useState } from 'react'

const App = () => {

  const [theme, settheme] = useState("Light")
  return (
    <div>
      <Navbar theme={theme} settheme={settheme} />
    </div>
  )
}

export default App
