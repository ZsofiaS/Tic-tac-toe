import React, { useState } from 'react';
import Board from './Board';

const Game = () => {
    const [currentPlayer, setCurrentPlayer] = useState('X');

    const updatePlayer = () => {
        console.log("updated");
        currentPlayer === "X" ? setCurrentPlayer("O") : setCurrentPlayer("X")
    }

    return (
        <Board current={currentPlayer} updateHandler={updatePlayer}/>
    )
}

export default Game;