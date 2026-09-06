import React from 'react'

const Navbar = (props) => {
    console.log(props);
    
  return (
    <div>
      <h1>Navbar
      </h1>
        {props.children}
        <button onClick={()=>{
        //   if(props.theme == 'Light'){
        //     props.settheme('Dark')
        //   } else{
        //     props.settheme('Light')
        //   }
        props.theme == 'Light' ? props.settheme('Dark') : props.settheme('Light')
        }}
        >Change Theme</button>
    </div>
  )
}

export default Navbar
