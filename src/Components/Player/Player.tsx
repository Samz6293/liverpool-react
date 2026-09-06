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
        rounded-xl p-4 my-2">

            {/* top row {CaretPosition, number, status} */}
            <div className="flex justify-between">
                <div className="flex justify-between gap-1.5">
                  <p className="px-2 bg-emerald-800 rounded-md">{player.strPosition}</p>
                  <p className="px-3 bg-slate-700 rounded-sm">#{player.strNumber}</p>
                </div>
                <p className="px-4 bg-emerald-100 rounded-full text-emerald-700">Status: {player.strStatus}</p>
            </div>
            {firtstName}
            {lastname}

        </div>
    </>
  )
}

export default Player