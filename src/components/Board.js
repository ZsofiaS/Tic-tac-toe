import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Square from './Square';
import PropTypes from 'prop-types';
import Button from './Button';

const BoardContainer = styled.div`
  width: 390px;
  height: 390px;
  padding: 1rem;
  border: 1px solid gainsboro;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Square = styled.button`
  width: 120px;
  height: 120px;
  border: none;
  margin: 5px;
  font-size: 50px;
  font-family: 'Grandstander', cursive;
  &:hover {
    background-color: ${(props) =>
      props.id === 1 ? 'rgb(239, 239, 239)' : 'palevioletred'};
    cursor: pointer;
  }
`;

export const Board = ({ current, updateHandler, declareWinner, restart }) => {
  const [board, setBoard] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const [end, setEnd] = useState(false);

  const combos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < combos.length; i++) {
      if (
        (board[combos[i][0]] === 'X' &&
          board[combos[i][1]] === 'X' &&
          board[combos[i][2]] === 'X') ||
        (board[combos[i][0]] === 'O' &&
          board[combos[i][1]] === 'O' &&
          board[combos[i][2]] === 'O')
      ) {
        finishGame();
        return;
      }
    }
  };

  const finishGame = () => {
    setEnd(true);
    declareWinner();
  };

  const clickHandler = async (e) => {
    if (!end) {
      const id = Number(e.target.id);
      const newBoard = board.map((square, i) => {
        if (id === i) {
          return current;
        }
        return square;
      });
      console.log(id);
      setBoard(newBoard);
      updateHandler();
    }
  };

  const createBoard = board.map((item, i) => (
    <Square key={i} id={i} onClick={clickHandler} board={item}>
      {board[i]}
    </Square>
  ));

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setEnd(false);
    restart();
  };

  useEffect(() => {
    checkWinner();
  });

  return (
    <>
      <Button onClick={restartGame}>Start again</Button>
      <BoardContainer>{createBoard}</BoardContainer>
    </>
  );
};

Board.propTypes = {
  current: PropTypes.string,
  updateHandler: PropTypes.func,
  declareWinner: PropTypes.func,
  restart: PropTypes.func,
};
