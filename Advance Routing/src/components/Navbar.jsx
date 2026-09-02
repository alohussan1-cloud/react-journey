import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'

const Navbar = () => {
  return (
    <div >
      <nav className='p-6 w-full bg-yellow-700 flex gap-16 font-normal text-3xl text-white justify-between pr-20'>
        <h1>This is Navbar</h1>
        <div className=" flex gap-16">
        <Link to="/" element={<Home/>} > Home</Link>
        <Link to="/about" element={<About/>} > About</Link>
        <Link to="/contact" element={<Contact/>} > Contact</Link>
        <Link to="/products" element={<Products/>} > Products</Link>
        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
