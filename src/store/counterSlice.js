import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'counter',
    initialState: 1,
    reducers: {
        inc: state => state + 1,
        dec: state => state - 1,
        changeBy: (state, action) => state + action.payload
    }
});

export const {inc, dec, changeBy} = slice.actions;

export default slice.reducer;