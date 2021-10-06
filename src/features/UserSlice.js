import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authentication, getUserById, handleLogout, updateUser } from '../api/auth';
import jwt from 'jsonwebtoken';
import IconAlerts from '../components/alert/IconAlert';

export const getProfile = createAsyncThunk('auth/getProfile', async (params) => {
    const token = params;
    const decodeToken = await jwt.decode(token);
    const id = decodeToken ? decodeToken.sub : '';
    if (id) {
        const res = await getUserById("users", id);
        if (res && res.status == 200) {
            if (res.data.wishlist) {
                localStorage.setItem('wishlist', JSON.stringify(res.data.wishlist));
            }
            return res.data;
        }
    }
});

export const handleLogin = createAsyncThunk('auth/login', async (user) => {
    let res = await authentication("login", user);
    if (res && res.status == 200) {
        localStorage.setItem('accessToken', res.data.accessToken);
        return 'loginSucess';
    }
    return 'loginFailed';
});

export const updateProfileAction = createAsyncThunk('auth/updateProfileAction', async (params) => {
    let res = await updateUser("users", params.id, params.user);
    if (res && res.status == 200) {
        return 'updateProfileSucess';
    }
    return 'updateProfileFailed';
});

export const addToWishlist = (product) => {
    try {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        const index = wishlist.findIndex(val => val.id == product.id);
        if (index !== -1) {
            wishlist.splice(index, 1);
        } else {
            wishlist = [...wishlist, product];
        }
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        return wishlist;
    } catch (error) {
        return IconAlerts("error", "Local Storage is full, Please empty data")
    }
}

export const getWishlist = createAsyncThunk('user/getWishlist', async () => {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    return wishlist;
});

export const handleLogoutUser = createAsyncThunk('user/handleLogoutUser', async (id) => {
    localStorage.removeItem('accessToken');
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    if (wishlist.length > 0) {
        let res = await handleLogout("users", id, wishlist);
        if (res && res.status == 200) {
            localStorage.removeItem('wishlist');
            return 'logoutSucess';
        }
    }
    return;
});

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        error: '',
        status: '',
        profile: {},
        wishlist: []
    },
    reducers: {
        setToWishlist: (state, action) => {
            state.wishlist = addToWishlist(action.payload);
        }
    },
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
        },
        [updateProfileAction.pending]: (state) => {
            state.loading = true;
        },
        [updateProfileAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [updateProfileAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        },
        [getWishlist.pending]: (state) => {
            state.loading = true;
        },
        [getWishlist.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getWishlist.fulfilled]: (state, action) => {
            state.loading = false;
            state.wishlist = action.payload;
        },
        [handleLogoutUser.pending]: (state) => {
            state.loading = true;
        },
        [handleLogoutUser.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [handleLogoutUser.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
            state.profile = {};
            state.wishlist = [];
        }
    }
});

const { reducer, actions } = userSlice;
export const { extraReducers, setToWishlist } = actions;
export default userSlice.reducer;
