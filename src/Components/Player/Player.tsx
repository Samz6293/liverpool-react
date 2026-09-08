import type { PlayerInfo } from "../../types"

export interface PlayerProps {
    player: PlayerInfo,
    favoritePlayers: PlayerInfo[],
    handleFavoritePlayers: (player: PlayerInfo, isFavorite: boolean) => void
}

const Player = ({player, favoritePlayers, handleFavoritePlayers}: PlayerProps) => {
    const [firtstName, ...lastname] = player.strPlayer.split(" ");
    const isFavorite = favoritePlayers.some(favplayer => favplayer.idPlayer === player.idPlayer);
    const handleLike = () => {
        handleFavoritePlayers(player, isFavorite);
    }
    return (
        <>
            {/* card border */}
            <div className="content-box flex flex-col overflow-hidden
            bg-linear-135 from-[#b40000] via-[260d08] to-[#0c0908]
            rounded-2xl border border-red-900 shadow-2xl shadow-black/40 
            p-5 my-4 max-w-155 gap-5 
            hover:border-red-500/60 hover:shadow-red-950/40
            sm:p-8 sm:gao-7 md:p-10">

                {/* top row {position, number, status} */}
                <div className="flex justify-between text-xs items-center select-none
                sm:text-sm md:text-lg">
                    <span className="px-2 py-1 bg-white/10 border border-white/10 rounded-full text-red-100
                    font-bold tracking-wider backdrop-blur-2xl">{player.strPosition}</span>
                    <span className="px-3 py-1 bg-black/40 border border-white/10  rounded-lg text-gray-300
                    font-mono font-bold"># {player.strNumber || "NA"}</span>
                </div>

                {/* id name team nationality photo */}
                <div className="flex justify-between items-center">
                    <div className="flex flex-col items-start"> 
                        <p className="text-[10px] font-light text-gray-400 font-mono tracking-widest
                        sm:text-xs select-none">#{player.idPlayer}</p>

                        <h2 className="text-xl mt-1 font-extrabold font-anybody leading-none
                        sm:text-4xl md:text-5xl lg:text-5xl select-none">{firtstName}</h2>

                        <p className="text-lg text-red-600 font-rainbow font-black 
                        sm:text-3xl md:text-4xl lg:text-5xl select-none">{lastname.join(" ")}</p>

                        <p className="text-[10px] text-gray-400 tracking-wide select-none">{player.dateBorn} · {player.strNationality}</p>

                        <button className="mt-3 px-5 py-0.5 bg-white text-red-600 rounded-full font-anybody font-bold text-xs
                        border-2 border-transparent transition-all duration-200 
                        hover:bg-red-600 hover:text-white hover:border-red-700 active:bg-red-400 active:scale-95
                        sm:px-6 sm:py-2 cursor-pointer"
                        onClick={() => {handleLike()
                        }}>{!isFavorite ? "LIKE" : "DISLIKE"}</button>
                    </div>

                    <img src={player.strThumb} className="rounded-lg inline-block w-[40%] border border-white/10 shadow-2xl" alt={player.strPlayer} />
                </div>


                {/* weight age foot */}
                <div className="flex justify-around items-center
                bg-black/30 border border-white/5 rounded-xl px-3 py-3 backdrop-backdrop-blur-md text-xs 
                sm:px-6 sm:py-4 select-none">
                    <div className="flex flex-col items-center gap-0.5">
                        <p className="text-[10px] text-gray-500 tracking-widest
                        sm:text-xs">weight</p>
                        <p className="text-xs text-white font-bold
                        sm:text-base md:text-lg">{player.strWeight}</p>
                    </div>

                    <hr className="w-10 h-0.5 rotate-90 bg-gray-700 rounded-lg border-0"/>

                    {/* <p className="px-4 bg-emerald-100 rounded-full text-emerald-700">Status: {player.strStatus}</p> */}
                    <div className="flex flex-col items-center gap-0.5">
                        <p className="text-[10px] text-gray-500 tracking-widest
                        sm:text-xs">strong foot</p>
                        <p className="text-xs text-white font-bold
                        sm:text-base md:text-lg">{player.strSide || "both"}</p>
                    </div>
                </div>
            </div>
        </>
  )
}

export default Player