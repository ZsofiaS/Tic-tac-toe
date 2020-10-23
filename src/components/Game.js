import React, { useState } from 'react';
import { Board } from './Board';

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState('');

  const updatePlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  };

  const declareWinner = () => {
    currentPlayer === 'X' ? setWinner('O') : setWinner('X');
  };

  const restartGame = () => {
    setWinner('');
    setCurrentPlayer('X');
  };

  return (
    <>
      {winner !== '' ? <p>{winner} wins!</p> : <p>{currentPlayer}'s turn</p>}
      <Board
        current={currentPlayer}
        updateHandler={updatePlayer}
        declareWinner={declareWinner}
        restart={restartGame}
      />
    </>
  );
};

export default Game;
