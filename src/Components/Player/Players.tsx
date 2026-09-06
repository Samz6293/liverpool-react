import { use } from "react"
import type { PlayerInfo } from "../../types"

export interface PlayerProps {
    playerDataPromise: Promise<PlayerInfo[]>
}
const Players = ({playerDataPromise}: PlayerProps) => {
  const players = use(playerDataPromise);
  console.log(players);
  return (
    <>
        {players.map((p)=> <p key={p.idPlayer}>{p.strPlayer}</p>)}
    </>
  )
}

export default Players