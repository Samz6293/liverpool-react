import type { PlayerInfo } from "./types";
import { Suspense, useState } from "react";
import Players from "./Components/Player/Players";
import FavoritePlayers from "./Components/FavoritePlayers/FavoritePlayers";
import { Slide, toast } from "react-toastify";

async function playerDataPromise(): Promise<PlayerInfo[]> {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=133602')
    const data = await response.json();
    return data.player;
}
const playersPromise = playerDataPromise();

function App() {

    // like status and count for player
    const [favoritePlayers, setFavoritePlayers] = useState<PlayerInfo[]>([]);
    const handleFavoritePlayers = (player: PlayerInfo, isFavorite:boolean) => {
        if(isFavorite) {
            const newFavorites = favoritePlayers.filter(favPlayer => favPlayer.idPlayer !== player.idPlayer)
            setFavoritePlayers(newFavorites);
            toast.error(`${player.strPlayer} removed from favorites`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
        }
        else {
            const newFavorites = [...favoritePlayers, player];
            setFavoritePlayers(newFavorites);
            toast.success(`${player.strPlayer} added to favorites`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
            });
        }
    }


    return (
        <>

            <Suspense fallback={<p>Loading...</p>}>
                <Players playerDataPromise={playersPromise} favoritePlayers={favoritePlayers} handleFavoritePlayers={handleFavoritePlayers}/>
            </Suspense>

            <FavoritePlayers favoritePlayers={favoritePlayers} handleFavoritePlayers={handleFavoritePlayers}/>
        </>
    )

}

export default App