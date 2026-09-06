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
        from-[#cc0000bb] from-1% to-[#9197a521]  to-60%
        rounded-xl p-4 my-2 max-w-5xl gap-4">

            {/* top row {position, number, status} */}
            <div className="flex justify-between text-xs">
                <div className="flex justify-between gap-1.5">
                  <p className="px-2 bg-red-800 rounded-md">{player.strPosition}</p>
                  <p className="px-3 bg-slate-700 rounded-sm"># {player.strNumber ? player.strNumber : "NA"}</p>
                </div>
                {/* <p className="px-4 bg-emerald-100 rounded-full text-emerald-700">Status: {player.strStatus}</p> */}
            </div>

            {/* id name team nationality photo */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs">#{player.idPlayer}</p>
                <p className="text-xl">{firtstName}</p>
                <p className="text-xl">{lastname}</p>
                <p className="text-xs">{player.dateBorn} | {player.strNationality}</p>
              </div>
                <img src={player.strThumb} className="rounded-lg inline-block w-[45%]" alt="" />
            </div>

            {/* weight age foot */}
            <div className="flex justify-around
            bg-slate-700 rounded-lg p-2 text-xs">

              <div className="flex flex-col items-center">
                <p>weight</p>
                <p>{player.strWeight}</p>
              </div>

              <div className="flex flex-col items-center">
                <p>foot</p>
                <p>{player.strSide ? player.strSide : "both"}</p>
              </div>

            </div>

        </div>
    </>
  )
}

export default Player