import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'onOff',
    initialState: false,
    reducers: {
        on: state => true,
        off: state => false,
        toggle: state => !state
    }
});

export const {on, off, toggle} = slice.actions;

export default slice.reducer;