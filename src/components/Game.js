import React, { useState } from 'react';
import { Board } from './Board';

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const updatePlayer = () => {
    currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
  };

  return (
    <>
      <p>Player: {currentPlayer}</p>
      <Board current={currentPlayer} updateHandler={updatePlayer} />
    </>
  );
};

export default Game;
