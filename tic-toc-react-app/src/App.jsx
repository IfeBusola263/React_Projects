import { useState } from "react"
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning_combinations";
import GameOver from "./components/GameOver";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

// Instead of using state to manage information for active player

function getActivePlayer(gameInfo){
  let currPlayer = 'X'
      if (gameInfo.length > 0 && gameInfo[0].player === 'X'){
        currPlayer = 'O';
      }
    return currPlayer;
}

function App() {
  
  // State lifing for passing active player to both the player component and Gameboard
  // const [activePlayer, setActivePlayer] = useState('X');

  // Register turns with the information of the player and the box clicked in the order they clicked
  // information on turns is stored as array of objects
  const [players, setPlayers] = useState({'X': 'Player 1', 'O': 'Player 2'});
  const [gameTurns, setGameTurns] = useState([]);
  let winner;
  let activePlayer = getActivePlayer(gameTurns);
  let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];

    // fill the board based on player action.
    for (const turn of gameTurns){
      const { selectedSquare, player } = turn;
      const { rowIdx, colIdx } = selectedSquare;

      gameBoard[rowIdx][colIdx] = player;
    }

    // Check if any player has the winning combination
    for (const combination of WINNING_COMBINATIONS){
      const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
      const thridSquareSymbol = gameBoard[combination[2].row][combination[2].column];

      if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thridSquareSymbol){
        winner = players[firstSquareSymbol];
      }
    }

    const hasDraw = gameTurns.length === 9;

  function handlePlayerActiveStatus(rowIdx, colIdx ){
    // setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
    setGameTurns((prevGameTurns) => {
      
      let currPlayer = getActivePlayer(prevGameTurns);

      const updatedGameTurns = [{selectedSquare: {rowIdx, colIdx}, player: currPlayer },...prevGameTurns];
      return updatedGameTurns;
    })
  }

  function restartGame(){
    setGameTurns([]);
  }


  function handlePlayerNameChange(symbol, newName){
    setPlayers(
        prevPlayers => {
          return {...prevPlayers, [symbol]: newName};
        }
    );
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playStatus={activePlayer} name="Player 1" symbol="X" changeName={handlePlayerNameChange} isActive={activePlayer === 'X'}/>
          <Player playStatus={activePlayer} name="Player 2" symbol="O" changeName={handlePlayerNameChange} isActive={activePlayer === 'O'}/>
        </ol>

        {(winner || hasDraw) && <GameOver winner={winner} onRestart={restartGame} />}
        <GameBoard switchActivePlayer={handlePlayerActiveStatus} gameBoardInfo={gameBoard} />
        {/* <GameBoard switchActivePlayer={handlePlayerActiveStatus} activePlayerSymbol={activePlayer} /> */}
      </div>
      <Log gameInfo={gameTurns}/>
    </main>
  )
}

export default App
