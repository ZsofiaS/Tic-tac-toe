import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
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
  border-radius: 5px;
  background-color: #118ab2;

  ${(props) =>
    props.board === 'X' || props.board === 'O'
      ? css`
          background-image: linear-gradient(
            319deg,
            #118ab2 0%,
            #06d6a0 37%,
            #ffd166 100%
          );
        `
      : css`
          background-color: #efefef;
          color: blue;
        `};

  &:hover {
    ${(props) =>
      props.board === 'X' || props.board === 'O' || props.ended === true
        ? css`
            background-color: rgb(239, 239, 239);
            cursor: auto;
          `
        : css`
            background-color: gainsboro;
            cursor: pointer;
          `};
  }
`;

export const Board = ({
  current,
  updateHandler,
  declareWinner,
  restart,
  declareTie,
}) => {
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

  const checkEndofgame = () => {
    if (!board.includes(null)) {
      setEnd(true);
      declareTie();
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
      setBoard(newBoard);
      updateHandler();
    }
  };

  const createBoard = board.map((item, i) => (
    <Square key={i} id={i} onClick={clickHandler} board={item} ended={end}>
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
    checkEndofgame();
    console.log(end);
  });

  return (
    <>
      <Button type="button" onClick={restartGame}>
        Start again
      </Button>
      <BoardContainer>{createBoard}</BoardContainer>
    </>
  );
};

Board.propTypes = {
  current: PropTypes.string,
  updateHandler: PropTypes.func,
  declareWinner: PropTypes.func,
  restart: PropTypes.func,
  declareTie: PropTypes.func,
};
