import type { PlayerInfo } from "../../types"
import FavoritePlayer from "./FavoritePlayer"

export interface FavouriteProps {
    favoritePlayers: PlayerInfo[]
    handleFavoritePlayers: (player: PlayerInfo, isFavorite: boolean) => void
}
const FavoritePlayers = ({favoritePlayers, handleFavoritePlayers}: FavouriteProps) => {
    return (
        <>
            <h1 className="text-center font-anybody text-5xl p-5">Favourite Players</h1>

            {/* conditional rendering based on selected players */}
            {favoritePlayers.length === 0 ? 
            <div className="content-box min-h-100 flex flex-col justify-center items-center border border-gray-500 border-dashed rounded-4xl mb-8">
                <h1 className="text-gray-500">No Favorite Players Selected</h1>
                <p className="text-slate-300">Select one from above</p>
            </div>
            :
            <div className="content-box flex flex-wrap justify-center items-start w-fit">
                {favoritePlayers.map((player)=> <FavoritePlayer key={player.idPlayer} 
                player={player} handleFavoritePlayers={handleFavoritePlayers}/>)}
            </div>
        
        }
        </>
    )
}

export default FavoritePlayers
