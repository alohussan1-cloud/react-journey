import React from 'react'
import Navlinks from './navlinks'
import Navbtns from './navbtns'
import Navlogo from './navlogo'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between px-10 py-2">
        <Navlogo/>
        <Navlinks/>
        <Navbtns/>
      </div>
    </div>
  )
}

export default Navbar
