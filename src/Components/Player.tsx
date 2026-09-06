import type { PlayerInfo } from "../types"

export interface PlayerProps {
    player: PlayerInfo
}
const Player = ({player}: PlayerProps) => {
  return (
    <>
        {/* card border */}
        <div className="content-box bg-slate-600 
        rounded-xl p-4 my-2">

            {player.strPlayer}

        </div>
    </>
  )
}

export default Player