import React from 'react'
import Card from './Components/card'

const App = () => {
  return (
    <div>
      <div className="parent">
      <Card name="Ali" age={19} img="https://plus.unsplash.com/premium_photo-1787082714738-3f11243c6dec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDh8fHxlbnwwfHx8fHw%3D" />
      <Card name="Hassan" age={21} img="https://images.unsplash.com/photo-1786878966640-c3133c9a00a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D" />
      <Card name="Bilal" age={25} img="https://plus.unsplash.com/premium_photo-1786938640605-89810217425e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
    </div>
  )
}

export default App
