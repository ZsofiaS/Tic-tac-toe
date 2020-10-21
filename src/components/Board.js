import React, { useState } from 'react';
import styled from 'styled-components';
// import Square from './Square';

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

const Square = styled.button`
    width: 200px;
    height: 200px;
    border: 1px solid crimson;
    margin: 4px;
`;

const Board = (props) => {

    const [board, setBoard] = useState([null, null, null, null, null, null, null, null, null]);

    const clickHandler = (e) => {
        let id = Number(e.target.id);
        const newBoard = board.map((square, i) => {
            if (id === i) {
                return props.current;
            }
                return square;
            })
        setBoard(newBoard);
        props.updateHandler();
    }

    const createBoard = board.map((current, i) => {
            return (
                <Square key={i} id={i} onClick={clickHandler}>{board[i]}</Square> 
            )
        })  

    return (
        <BoardContainer>
            {createBoard}
        </BoardContainer>
    )
}

export default Board;