import {  createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const handleRegister = createAsyncThunk('auth/register', async (user) => {
    console.log(user);
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        product: {},
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [handleRegister.pending]: (state) => {
            state.loading = true;
        },
        [handleRegister.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [handleRegister.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        }
    }
});

const { reducer, actions } = authSlice;
export const { extraReducers } = actions;
export default authSlice.reducer;
