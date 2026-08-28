import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState("")

  function onSubmit(e){
    e.preventDefault()
  }
  
  return (
    <div>
      <form onSubmit={(e)=>{
          onSubmit(e)
          console.log("Form Handled");
          
        }}>
        <input 
        type="text" 
        value = {title}
        onChange={(e)=>{
          setTitle(e.target.value)
          console.log("Writing");
          console.log(e.target.value);  
        }}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
