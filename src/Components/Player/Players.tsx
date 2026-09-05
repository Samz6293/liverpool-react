import { use } from "react"
import type { PlayerInfo } from "../../types"

export interface PlayerProps {
    playerDataPromise: Promise<{player: PlayerInfo[]}>
}
const Players = ({playerDataPromise}: PlayerProps) => {
  const players = use(playerDataPromise);
  console.log(players.player);
  return (
    <>
        {players.player.map((p)=> <p key={p.idPlayer}>{p.strPlayer}</p>)}
    </>
  )
}

export default Players