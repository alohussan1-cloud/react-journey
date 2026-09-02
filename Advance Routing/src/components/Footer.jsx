import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Products from '../pages/Products'

const Footer = () => {
  return (
    <div className='p-5 w-full bg-yellow-700 flex gap-16 font-normal text-3xl justify-between text-white pr-20'>
        <h1>This is Footer</h1>
        <div className=" flex gap-16 ">
            
            <Link to="/" element={<Home/>} > Home</Link>
            <Link to="/about" element={<About/>} > About</Link>
            <Link to="/contact" element={<Contact/>} > Contact</Link>
            <Link to="/products" element={<Products/>} > Products</Link>
        </div>
    </div>
  )
}

export default Footer