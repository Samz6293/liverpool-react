import { use } from "react"
import type { PlayerInfo } from "../../types"
import Player from "./Player"

export interface PlayerProps {
    playerDataPromise: Promise<PlayerInfo[]>,
    favoritePlayers: PlayerInfo[],
    handleFavoritePlayers: (player: PlayerInfo, isFavorite: boolean) => void;
}   

const Players = ({playerDataPromise, favoritePlayers, handleFavoritePlayers}: PlayerProps) => {
    const players = use(playerDataPromise);
    return (
        <>
            <h1 className="text-center font-anybody text-5xl p-5 mt-20">Player List</h1>

            {players.filter((player) => player.strStatus === "Active")
            .map((player)=> <Player key={player.idPlayer} player={player} 
            favoritePlayers={favoritePlayers} handleFavoritePlayers={handleFavoritePlayers}></Player>)}
        </>
  )
}

export default Players