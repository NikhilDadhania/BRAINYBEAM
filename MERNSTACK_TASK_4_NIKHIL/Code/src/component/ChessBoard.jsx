import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSquare } from '../store/chessSlice';
import './ChessBoard.css';

const ChessBoard = () => {
    const board = useSelector((state) => state.chess.board);
    const dispatch = useDispatch();

    const handleSquareClick = (row, col) => {
        dispatch(toggleSquare({ row, col }));
    };

    return (
        <div className="chess-container">
            <h1 className="chess-heading">Chess Game</h1>
            <div className="chess-board">
                {board.map((row, rowIndex) =>
                    row.map((square, colIndex) => (
                        <div
                            key={`${rowIndex}-${colIndex}`}
                            className="square"
                            style={{
                                backgroundColor: square.clicked
                                    ? square.color === 'white'
                                        ? 'yellow'
                                        : 'red'
                                    : square.color,
                            }}
                            onClick={() => handleSquareClick(rowIndex, colIndex)}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default ChessBoard;
