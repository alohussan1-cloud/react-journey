import { useState } from 'react'

const App = () => {

  // arrays
 const [arr, setarr] = useState([10,20,30,40])

 function increase(){

  // let newarr = [...arr]
  // newarr.push(180)

  // setarr(newarr)
  // console.log(arr);

  setarr(prev=>[...arr,90])
  console.log(arr); 
  
 }

 
//  Objects
const [object, setobject] = useState({name:"Ali", age:22})

const change = ()=>{
    // let newObj = {...object}
    // newObj.name = "Ali Hassan"
    // newObj.age = 25

    // setobject(newObj)
    // console.log(object);

    setobject(prev=>({...prev, name:"Hassan", age:25}))
    
}




  return (
    <div>
    <h3>My name is {object.name}</h3>
    <h3>My age is {object.age}</h3>
    <button onClick={change}>Increase</button>

    </div>
  )
}

export default App
