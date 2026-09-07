import React from 'react'
import { useContext } from 'react'
import ThemeContext, { createCxt } from '../Context/ThemeContext'

const NavLinks = (props) => {

 const data =   useContext(createCxt)
 console.log(data);
 
  return (
    <div className='links'>
      <h3>Home</h3>
      <h3>About</h3>
      <h3>Contact</h3>
      <h3>Products</h3>
      <h3>{props.theme}</h3>

    </div>
  )
}

export default NavLinks
