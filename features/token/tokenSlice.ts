import { createSlice } from '@reduxjs/toolkit'


const tokenData = '';

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: tokenData,
    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
        },
    },
});

export const { setToken } = tokenSlice.actions;

export default tokenSlice.reducer;
