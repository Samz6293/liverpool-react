import type { PlayerInfo } from "../../types"
import FavoritePlayer from "./FavoritePlayer"

export interface FavouriteProps {
    favoritePlayers: PlayerInfo[]
}
const FavoritePlayers = ({favoritePlayers}: FavouriteProps) => {
    return (
        <>
            <h1 className="text-center font-anybody text-5xl p-5">Favourite Players</h1>
            <div className="content-box flex flex-wrap justify-evenly items-start">
                {favoritePlayers.map((player)=> <FavoritePlayer key={player.idPlayer} player={player}/>)}
            </div>
        </>
    )
}

export default FavoritePlayers
