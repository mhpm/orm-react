import { useState } from 'react';

const Test = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const handleClick = (index: number) => {
    console.log('board: ', board);

    // If the square is already filled or there's a winner, do nothing
    if (board[index] || winner) return;

    // Update the board
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    // Check for a winner
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
    } else if (newBoard.every((cell) => cell !== null)) {
      setWinner('Draw');
    } else {
      // Switch players
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board: any) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const result = winConditions.find(
      ([a, b, c]) => board[a] && board[a] === board[b] && board[b] === board[c]
    );

    if (result) return currentPlayer;

    // for (let condition of winConditions) {
    //   const [a, b, c] = condition;
    //   if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    //     return board[a]; // Return the winner ('X' or 'O')
    //   }
    // }
    return null; // No winner yet
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner('');
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-10 w-full">
      <h1 className="mb-10 text-3xl font-bold">TIC TAC TOE</h1>
      <p>Current Payer: {currentPlayer}</p>
      <div className="flex flex-wrap gap-1 w-[340px]">
        {board.map((value, i) => (
          <div
            key={i}
            id={`square${i}`}
            onClick={() => handleClick(i)}
            className="p-6 rounded hover:cursor-pointer hover:bg-woodsmoke-900/80 text-lg font-bold flex justify-center items-center bg-woodsmoke-900 flex-grow w-[90px] h-20"
          >
            {value}
          </div>
        ))}
      </div>
      {winner && (
        <div className="mt-6 text-xl font-bold">
          {winner === 'Draw' ? "It's a Draw!" : `Winner: ${winner}`}
        </div>
      )}
      <div className="mt-10">
        <input
          className="button px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
          type="button"
          value="Restart"
          id="restartButton"
          onClick={restartGame}
        />
      </div>
    </div>
  );
};

export default Test;
