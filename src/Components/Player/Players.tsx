import { use } from "react"
import type { PlayerInfo } from "../../types"
import Player from "../Player"

export interface PlayerProps {
    playerDataPromise: Promise<PlayerInfo[]>
}

const Players = ({playerDataPromise}: PlayerProps) => {
  const players = use(playerDataPromise);
  console.log(players);
  return (
    <>
        {players.map((player)=> <Player key={player.idPlayer} player={player}></Player>)}
    </>
  )
}

export default Players