import { configureStore } from '@reduxjs/toolkit';
import chessReducer from './chessSlice';

export const store = configureStore({
    reducer: {
        chess: chessReducer,
    },
});
