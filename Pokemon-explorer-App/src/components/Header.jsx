import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col p-4 items-center mt-4 gap-2'>
      <h1 className='text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent'>
        Pokemon Explorer ⚡</h1>
      <p className=' text-lg text-[#91ADA4]'>Explore Pokémon, learn about their stats, abilities, types and more</p>
    </div>
  )
}

export default Header
