import React from 'react'

const App = () => {

  function onSubmit(e){
    e.preventDefault()
    console.log(e.target);
    
  }

  return (
    <div>
      <form onSubmit={function formHandling(e){
        onSubmit(e)
      }} >
        <input type="text"/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
