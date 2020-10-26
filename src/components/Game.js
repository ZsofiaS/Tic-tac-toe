import React, { useState } from 'react';
import styled from 'styled-components';
import { Board } from './Board';

export const ResultTitle = styled.p`
  font-size: 40px;
`;

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
      {winner !== '' ? (
        <ResultTitle>{winner} wins!</ResultTitle>
      ) : (
        <ResultTitle>{currentPlayer}'s turn</ResultTitle>
      )}
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
