import { useEffect, useState } from "react"
import Header from "./components/Header"
import axios from "axios"

const App = () => {

  const [data, setdata] = useState([])
  const [search, setsearch] = useState("")
  const [pokemonList, setPokemonList] = useState([])
  const [offset, setoffset] = useState(0)

  const formhandle = (e)=>{
    e.preventDefault()

  }

  const getData = async ()=>{
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
   setdata(response.data.results)
   console.log(data); 
  }

  const getPokemonList =  async ()=>{
    const response2 = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025")
    setPokemonList(response2.data.results) 
    console.log(pokemonList);
     
  }

   useEffect(()=>{
    getData()
    getPokemonList()
   },[offset])

   const prevbtn = ()=>{
    setoffset(offset - 12)
   }

   const nextBtn = ()=>{
    setoffset(offset + 12)
   }

  return (
    <div>
      <Header/>

    <form className="flex items-center justify-center gap-6 mt-6 "
    onSubmit={function onSubmit(e){
          formhandle(e)
    }} >
      <input type="text" placeholder="Search Pokemon..." 
      className="w-160 border border-[#1C334B] bg-[#0B2420] rounded-2xl py-2 px-6 
      placeholder-[#6F8981] focus:border-[#39D98A] outline-0 focus:ring-1.5 focus:ring[#39D98A]/20 "
      value={search}
      onChange={(e)=>{
          setsearch(e.target.value)
      }}/>
      <button className="border-red-800 border-2"
     onClick={getData}
     >Get Data</button>
    </form>

      <div >
    <div className=" flex flex-wrap justify-center gap-4 py-6 px-4">
      {data.map((elem, idx)=>{

       let id = elem.url.split("/")[6] 
      
          return (
            <div className="cards border border-[#1C334B] rounded-2xl p-4 ">
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
      <div className="btns flex gap-16 justify-center p-6">
        <button disabled={ offset == 0} 
        className=" py-2 px-6 rounded-xl text-[#91ADA4] text-2xl border border-[#1C443B] bg-[#102E29] 
        transition enabled:hover:border-[#39D98A] enabled:hover:text-[#5EF2AB]
        active:scale-90
        disabled:cursor-not-allowed disabled:opacity-50 "
        onClick={prevbtn}    > 
        Prev</button>
        <button className="py-2 px-6 rounded-xl text-[#91ADA4] text-2xl border
        border-[#1C443B] bg-[#102E29] transition hover:border-[#39D98A] hover:text-[#5EF2AB]"
        onClick={nextBtn}
        > Next</button>
      </div>
    </div>

    </div>
  )
}

export default App
