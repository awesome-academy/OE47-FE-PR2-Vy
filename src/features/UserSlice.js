import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { register } from '../api/auth';

export const getProfile = createAsyncThunk('auth/getProfile', async () => {
    const profile = JSON.parse(localStorage.getItem('profile')) || null;
    if (profile) {
        return profile;
    }
});

export const handleLogin = createAsyncThunk('auth/login', async (user) => {
    let res = await register("login", user);
    if (res && res.status == 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        localStorage.setItem('profile', JSON.stringify(res.data.user));
        return 'loginSucess';
    }
    return 'loginFailed';
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: '',
        status: '',
        profile: {}
    },
    reducers: {},
    extraReducers: {
        [handleLogin.pending]: (state) => {
            state.loading = true;
        },
        [handleLogin.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [handleLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        },
        [getProfile.pending]: (state) => {
            state.loading = true;
        },
        [getProfile.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getProfile.fulfilled]: (state, action) => {
            state.loading = false;
            state.profile = action.payload;
        }
    }
});

const { reducer, actions } = userSlice;
export const { extraReducers } = actions;
export default userSlice.reducer;
