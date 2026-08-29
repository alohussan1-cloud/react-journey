import axios from 'axios'
import { useState } from 'react';


const App = () => {

//  async function APIs(){
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
  
//   const data = await response.json()
//   console.log(data[0].name);
  
//   }
//   APIs()

const [data, setData] = useState([])

async function getData(){
  const response = await axios.get('https://jsonplaceholder.typicode.com/users')
  console.log(response.data);
  
  setData(response.data);
}
  
  return (
    <div>
      <button onClick={getData}>Get Data</button>
        {data.map((elem)=>{
            return(
              <h1>The username for {elem.name} is {elem.username} </h1>
            )
        })}
    </div>
  )
}

export default App
