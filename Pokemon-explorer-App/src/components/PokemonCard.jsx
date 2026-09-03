
const PokemonCard = ({pokemonData, setpokemonData}) => {
    console.log(pokemonData);
    
    return (
        pokemonData ?
        <div className=" gap-12 py-4 px-4 w-8/10 m-auto rounded-3xl bg-white/10  border border-white/10 shadow-2xl shadow-black/20 mt-10" >
           <div >
            <button onClick={()=>{
                setpokemonData("")
            }}
            className=" ml-10 group inline-flex items-center gap-2 rounded-xl border border-[#29413e] bg-[#172d2a] px-4 py-2.5 text-sm font-semibold text-gray-300
            transition-all duration-200 hover:border-emerald-500 hover:bg-[#1b3834] hover:text-emerald-400">
            <span className="text-lg transition-transform duration-200 group-hover:-translate-x-1">←</span>
              Back to Pokémon</button>
            </div>
            <div className="flex gap-12 py-6 px-10  shadow-2xl s">
            <div className="w-1/2 flex flex-col items-center py-6 px-20 rounded-2xl bg-black/10 border border-white/5 ">
                <div className="w-full pl-8">
                    <h1 className="font-bold text-4xl uppercase tracking-wide text-white">
                        {pokemonData.name}
                    </h1>

                    <div className="flex gap-3 mt-4">
                        <h1 className="font-semibold leading-none capitalize text-lg bg-green-500/20 border border-green-400/20 text-green-300 rounded-lg px-4 py-3">
                            {pokemonData.types[0].type.name}
                        </h1>

                       {pokemonData.types[1] ? <h1 className="font-semibold leading-none capitalize text-lg bg-green-500/20 border border-green-400/20 text-green-300 rounded-lg px-4 py-3">
                            {pokemonData.types[1].type.name}
                        </h1> : "" } 
                    </div>
                </div>

                <div className="flex w-full mt-4">
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonData.id}.png`}
                        alt={pokemonData.name}
                        className="w-80 h-80 object-contain  hover:scale-105 transition duration-300"
                    />
                </div>
            </div>

            <div className="w-1/2 pt-2">

                <div className="bg-black/10 rounded-2xl p-6 border border-white/5">
                    <h1 className="font-bold text-3xl mb-5 text-white">
                        About
                    </h1>

                    <p className="font-medium text-lg text-gray-300 mb-3">
                        Height : <span className="text-white">{pokemonData.height} m</span>
                    </p>

                    <p className="font-medium text-lg text-gray-300">
                        Weight : <span className="text-white">{pokemonData.weight} kg</span>
                    </p>
                </div>

                <div className="bg-black/10 rounded-2xl p-6 border border-white/5 mt-5">
                    <h1 className="font-bold text-2xl text-white mb-5">
                        Base Stats
                    </h1>

    <div className="grid grid-cols-2 gap-3">
        {
            pokemonData.stats.map((data)=>{
                return(
                    <p className="font-medium text-base capitalize text-gray-300 bg-white/5 rounded-lg px-4 py-3 border border-white/5 flex justify-between">
                        <span className="text-white">
                            {data.stat.name}
                        </span>
                        <span className="text-gray-300">
                            {data.base_stat}
                        </span>
                    </p>
                )
            })
        }
    </div>
</div>
            </div>

        </div>
        </div>
        : ""
    )
}

export default PokemonCard