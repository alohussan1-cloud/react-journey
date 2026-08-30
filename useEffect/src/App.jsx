import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
const [num, setnum] = useState(0)
const [num2, setnum2] = useState(0)
const [num3, setnum3] = useState(0)

useEffect(()=>{
  console.log("Use effect is running");
  
},[num3])

const increaseNum = ()=>{
  setnum(num+1)
}

const decreaseNum = ()=>{
  setnum2(num2-1)
}

const addFive = ()=>{
  setnum3(num3+5)
}
  return (
    <div>
      <div className="box"><h1>{num}</h1> <h1>{num2}</h1> <h1>{num3}</h1></div>
      <div className="box2"><button onClick={increaseNum}>Click</button> <button onClick={decreaseNum}>Click</button>
      <button onClick={addFive}>Click</button></div>
    </div>
  )
}

export default App
