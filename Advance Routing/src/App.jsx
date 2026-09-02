import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Footer from './components/Footer'
import Phones from './pages/Phones'
import Laptops from './pages/Laptops'
import Accessories from './pages/Accessories'
import NotFound from './pages/NotFound'
import NavBtns from './components/NavBtns'

const App = () => {
  return (
    <div className=' bg-black w-full h-screen' >
      <Navbar/>
      <NavBtns/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>}>
        <Route path='phones' element={<Phones/>}/> 
        <Route path='laptops' element={<Laptops/>}/> 
        <Route path='Accessories' element={<Accessories/>}/> 
      </Route>
      <Route path='*' element={<NotFound/>} />
    </Routes>

    <Footer/>
    </div>
  )
}

export default App
