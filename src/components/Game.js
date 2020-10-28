import React, { useState } from 'react';
import styled from 'styled-components';
import { Board } from './Board';

export const ResultTitle = styled.p`
  font-size: 40px;
  margin: 0.2rem;
`;
export const WinnerName = styled.span`
  background: -webkit-linear-gradient(319deg, #118ab2, #06d6a0, #ffd166);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 55px;
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

  const declareTie = () => {
    setWinner('No one');
  };

  const restartGame = () => {
    setWinner('');
    setCurrentPlayer('X');
  };

  return (
    <>
      {winner !== '' ? (
        <ResultTitle>
          <WinnerName>{winner}</WinnerName> wins!
        </ResultTitle>
      ) : (
        <ResultTitle>
          <WinnerName>{currentPlayer}</WinnerName>'s turn
        </ResultTitle>
      )}
      <Board
        current={currentPlayer}
        updateHandler={updatePlayer}
        declareWinner={declareWinner}
        declareTie={declareTie}
        restart={restartGame}
      />
    </>
  );
};

export default Game;
