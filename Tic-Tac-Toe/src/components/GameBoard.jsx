import React, { useState } from 'react';

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleSelectSquare(rowIndex, colIndex) {
            const newGameBoard = [...gameBoard.map(col => [...col])];
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            setGameBoard(newGameBoard);

            onSelectSquare();
        }
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>{col}</button>
                            </li>
                        ))}
                    </ol>
                </li>
            ))}
        </ol>
    );
}
