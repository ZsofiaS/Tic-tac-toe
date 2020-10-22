import React, { useState } from 'react';
import { Board } from './Board';

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const updatePlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  };

  const declareWinner = async () => {
    currentPlayer === 'X' ? setWinner('O') : setWinner('X');
  };

  return (
    <>
      {winner !== '' ? <p>Winner: {winner}</p> : <p>Player: {currentPlayer}</p>}
      <Board
        current={currentPlayer}
        updateHandler={updatePlayer}
        declareWinner={declareWinner}
      />
    </>
  );
};

export default Game;
