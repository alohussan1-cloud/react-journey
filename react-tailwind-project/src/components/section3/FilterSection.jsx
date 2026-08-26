import React from 'react'
import Filterbar from './filterbar'
import CategoryCards from './CategoryCards'

const FilterSection = ({categoryCards}) => {
  console.log(categoryCards);
  
  
  return (
    <div className='bg-gray-200 py-10 rounded-2xl w-full mt-2 px-8'>
      <Filterbar/>
      <div className="cards-container flex flex-wrap gap-4 mt-12">
      {categoryCards.map(function(elem, idx){
        return(
           <CategoryCards  key={idx} cards={elem}  />
        )
      })}
      </div>
    </div>
  )
}

export default FilterSection
