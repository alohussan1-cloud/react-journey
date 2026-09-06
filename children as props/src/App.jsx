import React, { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {
  const [theme, settheme] = useState('Light')
  return (
    <div>
      <Navbar theme={theme} settheme={settheme} >
        <h1>{theme}</h1>
      </Navbar>
    </div>
  )
}

export default App
