// import { useState } from "react"

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]

// export default function GameBoard({ switchActivePlayer, activePlayerSymbol }){
export default function GameBoard({ switchActivePlayer, gameBoardInfo }){
    // let gameBoard = initialGameBoard;

    // fill the board based on player action.
    // for (const turn of gameInfo){
    //   const { selectedSquare, player } = turn;
    //   const { rowIdx, colIdx } = selectedSquare;

    //   gameBoard[rowIdx][colIdx] = player;
    // }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleGameboard(rowIdx, colIdx){
    //     setGameBoard(
    //         (prevGameBord) => {
    //             // creating a deep copy of the gameboard, so it is not updated immediately, 
    //             // incase other components of the app make changes to this same state, 
    //             // so this does cause a bug
    //             const newGameBoard = [...prevGameBord.map(initialRow => [...initialRow])]; 
    //             newGameBoard[rowIdx][colIdx] = activePlayerSymbol;
    //             return newGameBoard;
    //         }
    //     );

    //     switchActivePlayer();
        
    // }

    //  Display the game board

    return (
        <ol id="game-board">
            {gameBoardInfo.map((row, rowIdx) => <li key={rowIdx}>
                <ol>
                {row.map((playerSymbol, colIdx) => <li key={colIdx}>
                    {/* <button onClick={() => handleGameboard(rowIdx, colIdx)}>{playerSymbol}</button> */}
                    <button onClick={() => switchActivePlayer(rowIdx, colIdx)} disabled={playerSymbol !== null}>{playerSymbol}</button>
                    </li> 
                )}
                </ol>
           </li> )}
        </ol>
    )
}