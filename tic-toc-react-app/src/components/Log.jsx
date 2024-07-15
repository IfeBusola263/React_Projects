
// This component returns information on the turns taken in the game so far.
// To know which turn was taken by which player
export default function Log({ gameInfo }){
    return(
        <ol id="log">
            {gameInfo.map((turn => 
                <li key={`${turn.selectedSquare.rowIdx}${turn.selectedSquare.colIdx}`}>
                    {turn.player} selcted {turn.selectedSquare.rowIdx}, {turn.selectedSquare.colIdx}
                </li>
            ))}
        </ol>
    )
}