
const PokemonCard = ({pokemonData}) => {
    console.log(pokemonData.stats);
  return (
    <div>
        <div className="div">
            <h1>{pokemonData.name}</h1>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}  alt="" />
        </div>
        <div>
            <div className="size">
                <h1> {pokemonData.height} m </h1>
                <h1> {pokemonData.weight} kg </h1>
            </div>
            <div className="stats">
                
                { pokemonData.stats === undefined ? "":
                pokemonData.stats.map((data)=>{
                    return(
                        <h1> {data.stat.name} : {data.base_stat}</h1>
                    )
                    
                })}
                <h1></h1>
            </div>
            <div className="abilities">

            </div>
        </div>
    </div>
  )
}

export default PokemonCard
