import React, { useState } from 'react'
import UseProfile from './custom hooks/useProfile'
import axios from 'axios'
import useCount from './custom hooks/useCount'

const App = () => {

 const {count,increase, decrease,reset} = useCount()

  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase} >Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App