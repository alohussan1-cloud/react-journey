import React from 'react'
import { useReducer } from 'react'
import { useState } from 'react'

const App = () => {

  const initialState = {count:0, inputValue:""}

  const reducer = (state, action)=>{
      if(action.type === "increment"){
        return {...state, count:state.count+1}
      } else if (action.type === "decrement"){
        return  {...state, count:state.count-1}
      } else if(action.type === "resetVal"){
        return  {...state, count:0}
      } else if(action.type === "setInput"){
        return  {...state, inputValue:action.value}
      } else if(action.type === "setValue"){
        return {...state, count:state.inputValue, inputValue:''}
      }
  }


   const [state, dispatch] = useReducer(reducer, initialState )
  console.log(state);

  
  return (
    <div>
      {/* <form action="">
        <input type="text" placeholder='Your Name' />
        <input type="email"  placeholder='Your Email' />
        <input type="password"  placeholder='Your Password'  />
        <button>Submit</button>
      </form> */}

      <h1>{state.count}</h1>
      <button onClick={()=>{
        dispatch({type:"increment"})
      }}
      >Increase</button>
      <button onClick={()=>{
        dispatch({type:"decrement"})
      }}
      >Decrease</button>
      <button onClick={()=>{
        dispatch({type:"resetVal"})
      }}
      >Reset</button>
      <div>
        <input type="number" value= {state.inputValue}
         onChange={(e)=>{
          dispatch({type:"setInput", value:e.target.value})
        }}/>
        <button onClick={()=>{
          dispatch({type:"setValue"})
        }}
        >Set Value</button>
      </div>
    </div>
  )
}

export default App
