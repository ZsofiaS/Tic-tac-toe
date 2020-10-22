import React, { useState } from 'react';
import styled from 'styled-components';
// import Square from './Square';
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

  const clickHandler = (e) => {
    const id = Number(e.target.id);
    const newBoard = board.map((square, i) => {
      if (id === i) {
        return props.current;
      }
      return square;
    });
    setBoard(newBoard);
    props.updateHandler();
    console.log(board);
  };

  const createBoard = board.map((current, i) => (
    <Square key={i} id={i} onClick={clickHandler}>
      {board[i]}
    </Square>
  ));

  const restartGame = () => {
      setBoard(Array(9).fill(null));
      console.log(board);
  }

  return (
      <>
    <Button onClick={restartGame}>Start again</Button>
    <BoardContainer>{createBoard}</BoardContainer>
    </>
  );
};
