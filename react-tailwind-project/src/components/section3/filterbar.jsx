import React from 'react'

const Filterbar = () => {
  return (
    <div>
      <ul className='flex gap-2'>
        <li><a href="#" className='border text-white bg-blue-600 rounded-full py-2 px-4'>View All</a></li>
        <li><a href="#" className='border rounded-full py-2 px-4'>Marketing Tips</a></li>
        <li><a href="#" className='border rounded-full py-2 px-4'>Bussiness Strategies</a></li>
        <li><a href="#" className='border rounded-full py-2 px-4'>Industry Insights</a></li>
        <li><a href="#" className='border rounded-full py-2 px-4'>Client Success</a></li>
      </ul>
    </div>
  )
}

export default Filterbar
