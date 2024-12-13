import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    board: Array(8)
        .fill(null)
        .map((_, row) =>
            Array(8)
                .fill(null)
                .map((_, col) => ({
                    color: (row + col) % 2 === 0 ? 'white' : 'black',
                    clicked: false,
                }))
        ),
};

const chessSlice = createSlice({
    name: 'chess',
    initialState,
    reducers: {
        toggleSquare: (state, action) => {
            const { row, col } = action.payload;
            const square = state.board[row][col];
            square.clicked = !square.clicked;
        },
    },
});

export const { toggleSquare } = chessSlice.actions;
export default chessSlice.reducer;
