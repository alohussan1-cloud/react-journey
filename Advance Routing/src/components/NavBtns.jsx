import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBtns = () => {
    const navigate = useNavigate()
  return (
    <div className='h-1/10 bg-amber-600 p-2 flex gap-4'>
      <button className=' border rounded-xl bg-black py-2 px-4 text-2xl'
       onClick={()=>{
        navigate("/")
      }} > Return to Home Page</button>

      <button className=' border rounded-xl bg-black py-2 px-4 text-2xl'
       onClick={()=>{
        navigate(-1)
      }}> Prev</button>

      <button className=' border rounded-xl bg-black py-2 px-4 text-2xl'
       onClick={()=>{
        navigate(+1)
      }}> Next</button>
    </div>
  )
}

export default NavBtns
