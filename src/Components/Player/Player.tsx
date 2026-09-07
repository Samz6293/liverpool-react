import type { PlayerInfo } from "../../types"

export interface PlayerProps {
    player: PlayerInfo
}
const Player = ({player}: PlayerProps) => {
  const [firtstName, ...lastname] = player.strPlayer.split(" ");
  return (
    <>
        {/* card border */}
        <div className="flex flex-col content-box bg-linear-40 
        from-[#cc0000de] from-1% to-[#180d04]  to-60%
        rounded-xl p-4 my-4 max-w-5xl gap-5
        sm:p-8 md:p-10">
            {/* top row {position, number, status} */}
            <div className="flex justify-between text-xs items-center
            sm:text-sm md:text-lg">
                  <p className="px-2 bg-linear-60 from-red-600 to-red-800 rounded-md font-black">{player.strPosition}</p>
                  <p className="px-3 bg-slate-900 border-2 border-gray-700 rounded-sm"># {player.strNumber ? player.strNumber : "NA"}</p>
            </div>

            {/* id name team nationality photo */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-xs font-light text-gray-500">#{player.idPlayer}</p>
                <p className="text-2xl font-extrabold font-anybody
                sm:text-4xl md:text-5xl lg:text-6xl">{firtstName}</p>
                <p className="text-xl text-red-600 font-rainbow font-black 
                sm:text-4xl md:text-5xl lg:text-6xl">{lastname}</p>
                <p className="text-xs text-gray-200">{player.dateBorn} | {player.strNationality}</p>
                <button className="inline-block  bg-linear-60 from-slate-100 to-slate-300 text-red-600 rounded-full px-5 my-1.5 py-0.5 font-anybody font-bold 
                border-2 border-transparent hover:border-red-600 
                active:bg-none active:bg-red-500 active:text-white">LIKE</button>
              </div>
                <img src={player.strThumb} className="rounded-lg inline-block w-[45%]" alt="" />
            </div>


            {/* weight age foot */}
            <div className="flex justify-around
            bg-gray-900 rounded-lg p-2 text-xs items-center">

              <div className="flex flex-col items-center">
                <p className="text-slate-400">weight</p>
                <p className="font-bold">{player.strWeight}</p>
              </div>
              <hr className=" w-10 h-0.5 rotate-90 bg-slate-700 rounded-lg border-0"/>
              {/* <p className="px-4 bg-emerald-100 rounded-full text-emerald-700">Status: {player.strStatus}</p> */}
              <div className="flex flex-col items-center">
                <p className="text-slate-400">foot</p>
                <p className="font-bold">{player.strSide ? player.strSide : "both"}</p>
              </div>


            </div>

        </div>
    </>
  )
}

export default Player