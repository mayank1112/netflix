import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    initialState: {count: 0},
    reducer: {
        addCount: (state, payload) => {
            return state.count + payload;
        },
        getCount: state => {
            return state;
        },
    }
});

export const {addCount, getCount} = tvSlice.actions;

export const tvState = state => state.tvState;

export default tvSlice.reducer;
