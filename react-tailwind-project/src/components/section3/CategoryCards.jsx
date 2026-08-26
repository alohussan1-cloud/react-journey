import React from 'react'

const CategoryCards = ({cards}) => {
    console.log(cards);
    
  return (
    <div className="w-70 pt-2 pb-4 px-2 bg-white rounded-3xl" >
      <div className="top rounded-2xl overflow-hidden" >
        <img className='w-68 h-40 object-cover' src={cards.image} alt="" />
      </div>
      <div className="center py-2">
        <h1 className='font-medium'>{cards.title} </h1>
        <p className='text-gray-500'>{cards.description}</p>
      </div>
      <div className="bottom flex gap-2  items-center">
        <div className="image overflow-hidden">
            <img className=' w-8 h-8 rounded-full object-cover' src={cards.authorImage} alt="" />
        </div>
        <div className="info text-sm py-3">
            <h1>{cards.author}</h1>
            <p className='text-gray-500'>{cards.date} . {cards.readTime}</p>
        </div>
      </div>
    </div>
  )
}

export default CategoryCards
