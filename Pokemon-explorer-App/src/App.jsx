import { useEffect, useState } from "react"
import Header from "./components/Header"
import axios from "axios"
import PokeHomePage from "./components/PokeHomePage"
import PokemonCard from "./components/PokemonCard"

const App = () => {

  const [data, setdata] = useState([])
  const [search, setsearch] = useState("")
  const [pokemonList, setPokemonList] = useState([])
  const [offset, setoffset] = useState(0)
  const [searchResults, setSearchResults] = useState([])
  const [pokemonIdentifier, setpokemonIdentifier] = useState(null)
  const [pokemonData, setpokemonData] = useState(null)


  const formhandle = (e)=>{
    e.preventDefault()

  }

  const getData = async ()=>{
   const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${offset}`)
   setdata(response.data.results)
  }

  const getPokemonList =  async ()=>{
    const response2 = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=1025")
    setPokemonList(response2.data.results) 
    
  }

   useEffect(()=>{
    getData()
   },[offset])

   useEffect(()=>{
    getPokemonList()
   }, [])


   useEffect(()=>{
    const result = pokemonList.filter((pokemon)=>
      pokemon.name.includes(search.toLowerCase())
    
  )
  setSearchResults(result)
   }, [search])

 const pokemonDetail = async (identifier)=>{
  if(!identifier) return

  const pokemonResponse =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
  setpokemonData(pokemonResponse.data)
 }


 useEffect(()=>{
  pokemonDetail(pokemonIdentifier)
  
  
 },[pokemonIdentifier])


 

  return (
    <div>
      <Header/>

    <form className="flex items-center justify-center gap-6 mt-6 "
    onSubmit={function onSubmit(e){
          formhandle(e)
    }} >
      <div className="relative ">
         <input type="text" placeholder="Search Pokemon..." 
      className="w-160 border border-[#1C334B] bg-[#0B2420] rounded-2xl py-2 px-6 
      placeholder-[#6F8981] focus:border-[#39D98A] outline-0 focus:ring-1.5 focus:ring[#39D98A]/20 "
      value={search}
      onChange={(e)=>{
          setsearch(e.target.value)
      }}/>

       <div  className={`absolute top-full left-0 w-full h-120 overflow-auto rounded-xl border border-green-400/30
       bg-[#064e3b] sladow-lg flex flex-col gap-2 mt-4  ${search==="" ? "hidden" : ""}`}>
        {searchResults.map((pokemon)=>{

          return(
            <div className="px-4 py-2 cursor-pointer rounded-2xl hover:bg-[#08644b]"
            onClick={()=>{
             setpokemonIdentifier(pokemon.name)
             console.log(pokemonIdentifier); 
             setsearch("") 
            }}>
              {pokemon.name}
            </div>
          )
        })}
        </div>
      </div>
    </form>
      <div >

      {pokemonData ? <PokemonCard pokemonData= {pokemonData} setpokemonData= {setpokemonData} /> 
        : <PokeHomePage  data={data}/>  } 

      <div className="btns flex gap-16 justify-center p-6">
        <button disabled={ pokemonData ? pokemonData.id === 1 : offset == 0  } 
        className=" py-2 px-6 rounded-xl text-[#91ADA4] text-2xl border border-[#1C443B] bg-[#102E29] 
        transition enabled:hover:border-[#39D98A] enabled:hover:text-[#5EF2AB]
        active:scale-90
        disabled:cursor-not-allowed disabled:opacity-50 "
        onClick={function prevbtn(){
          if(pokemonIdentifier){
            setpokemonIdentifier(pokemonData.id-1)
          } else{

            setoffset(offset - 12)
          }
        }} > Prev</button>

        <button className="py-2 px-6 rounded-xl text-[#91ADA4] text-2xl border
        border-[#1C443B] bg-[#102E29] transition hover:border-[#39D98A] hover:text-[#5EF2AB]"
        onClick={function nextBtn(){
            if(pokemonIdentifier){
            setpokemonIdentifier(pokemonData.id+1)
          } else{

            setoffset(offset + 12)
          }
        }} > Next</button>

      </div>
    </div>

    </div>
  )
}

export default App

