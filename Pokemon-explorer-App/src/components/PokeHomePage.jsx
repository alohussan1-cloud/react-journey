import React from 'react'

const PokeHomePage = (props) => {
    
  return (
    <div>
      <div className=" flex flex-wrap justify-center gap-4 py-6 px-4">
      {props.data.map((elem, idx)=>{

       let id = elem.url.split("/")[6] 
      
          return (
            <div key={idx} className="cards border border-[#1C334B] rounded-2xl p-4 ">
          <div className="image">
            <img className="w-56 h-60" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="" />
          </div>
          <div className="info">
            <h1 className=" text-2xl font-semibold text-center">{elem.name}</h1>
          </div>
      </div>
      
          )

      })}
      </div>
    </div>
  )
}

export default PokeHomePage
