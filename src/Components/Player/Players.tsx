import { use } from "react"
import type { PlayerInfo } from "../../types"
import Player from "./Player"

export interface PlayerProps {
    playerDataPromise: Promise<PlayerInfo[]>
}

const Players = ({playerDataPromise}: PlayerProps) => {
  const players = use(playerDataPromise);
  return (
    <>
        <h1 className="text-center font-anybody text-5xl p-5">Player List</h1>
        {players
        .filter((player) => player.strStatus === "Active")
        .map((player)=> <Player key={player.idPlayer} player={player}></Player>)}
    </>
  )
}

export default Players