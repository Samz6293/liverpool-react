async function playerDataPromise() {
    const response = await fetch('https://www.thesportsdb.com/api/v1/json/123/lookup_all_players.php?id=133602')
    const data = await response.json();
    return data;
}

function App() {
    return (
        <>
        </>
    )

}

export default App
