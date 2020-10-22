import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import Square from './Square';
import PropTypes from 'prop-types';
import Button from './Button';

const BoardContainer = styled.div`
  width: 630px;
  height: 630px;
  padding: 1rem;
  border: 1px solid gainsboro;
  margin: 2rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Square = styled.button`
  width: 200px;
  height: 200px;
  border: 1px solid crimson;
  margin: 4px;
`;

export const Board = (props) => {
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

  const combos = [
    [0, 1, 2],
    [1, 3, 6],
    [2, 5, 8],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < combos.length; i++) {
      if (
        board[combos[i][0]] === 'X' &&
        board[combos[i][1]] === 'X' &&
        board[combos[i][2]] === 'X'
      ) {
        finishGame();
        return;
      }
    }
  };

  const finishGame = () => {
    console.log('finished');
  };

  const clickHandler = async (e) => {
    const id = Number(e.target.id);
    const newBoard = board.map((square, i) => {
      if (id === i) {
        return props.current;
      }
      return square;
    });
    setBoard(newBoard);
    props.updateHandler();
  };

  const createBoard = board.map((current, i) => (
    <Square key={i} id={i} onClick={clickHandler}>
      {board[i]}
    </Square>
  ));

  const restartGame = () => {
    setBoard(Array(9).fill(null));
  };

  useEffect(() => {
    checkWinner();
  }, [board]);

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
};
