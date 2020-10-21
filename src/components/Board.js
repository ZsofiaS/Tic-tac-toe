import React from 'react';
import styled from 'styled-components';

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

const Board = () => {
    return (
        <BoardContainer>
            <Square value="1" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="2" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="3" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="4" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="5" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="6" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="7" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="8" onClick={(e) => console.log(e.target.value)}></Square>
            <Square value="9" onClick={(e) => console.log(e.target.value)}></Square>
        </BoardContainer>
    )
}

export default Board;