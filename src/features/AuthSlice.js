import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authentication } from '../api/auth';

export const handleRegister = createAsyncThunk('auth/register', async (user) => {
    let res = await authentication("users", user);
    if (res && res.status == 201) {
        return 'registerSucess';
    }
    return 'registerFailed';
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loading: false,
        error: '',
        status: ''
    },
    reducers: {},
    extraReducers: {
        [handleRegister.pending]: (state) => {
            state.loading = true;
        },
        [handleRegister.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [handleRegister.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        }
    }
});

const { reducer, actions } = authSlice;
export const { extraReducers } = actions;
export default authSlice.reducer;
