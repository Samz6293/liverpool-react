import type { PlayerInfo } from "./types";
import { Suspense } from "react";
import Players from "./Components/Player/Players";

async function playerDataPromise(): Promise<{ player: PlayerInfo[]}> {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=133602')
    const data = await response.json();
    return data;
}

function App() {
    return (
        <>
            <Suspense fallback={<p>Loading...</p>}>
                <Players playerDataPromise={playerDataPromise()}></Players>
            </Suspense>
        </>
    )

}

export default App