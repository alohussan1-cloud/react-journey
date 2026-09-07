import React, { useContext } from 'react'
import NavLinks from './NavLinks'
import { createCxt } from '../Context/ThemeContext'

const Navbar = (props) => {

   const data = useContext(createCxt)
  return (
    <div className='nav'>
      <h1>Navbar</h1>
      <h1>{data}</h1>
      <NavLinks theme={props.theme} settheme={props.settheme} />
    </div>
  )
}

export default Navbar
