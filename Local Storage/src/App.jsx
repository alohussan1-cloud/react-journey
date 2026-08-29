import React from 'react'

const App = () => {


  // Local Storage setItem
//  let user = {
//     username:"Ali",
//     age: 22,
//     City:"Hyderabad"
//   }
//    let person = {
//     username:"Hassan",
//     age: 26,
//     City:"Hyderabad"
//   }
//   localStorage.setItem("person2", JSON.stringify(person)  )



// Local Storage getItem
let person2 = localStorage.getItem("person2")

let person = localStorage.getItem("person")
console.log(person);



// Local Storage removeItem
localStorage.removeItem("user")


// local Storage Clear
localStorage.clear()

  
    return (
    <div>
      
    </div>
  )
}

export default App
