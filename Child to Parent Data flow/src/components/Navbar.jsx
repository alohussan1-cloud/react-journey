import { useState } from "react"


const Navbar = (props) => {
    
    
  return (
    <div>
      <button onClick={()=>{
        props.setname("Salman Kazmi")
      }}>Change Name</button>
    </div>
  )
}

export default Navbar
