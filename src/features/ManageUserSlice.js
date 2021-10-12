import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { changeRoleUser, changeActiveUser, getAllUser } from '../api/auth';

export const getUsers = createAsyncThunk('manageUsers/getUsers', async () => {
    let res = await getAllUser("users");
    if (res && res.status == 200) {
        return res.data;
    }
});

export const changeStatusRoleUserAction = createAsyncThunk('manageOrder/changeStatusRoleUser',
    async (params) => {
        let res = await changeRoleUser("users", params.id, params.role);
        if (res && res.status == 200) {
            return 'changeRoleUserSuccess';
        }
        return 'changeRoleUserFailed';
    });


export const changeStatusActiveUserAction = createAsyncThunk('manageOrder/changeStatusActiveUser',
    async (params) => {
        let res = await changeActiveUser("users", params.id, params.active);
        if (res && res.status == 200) {
            return 'changeActiveUserSuccess';
        }
        return 'changeActiveUserFailed';
    });

const manageUserSlice = createSlice({
    name: 'manageUser',
    initialState: {
        loading: false,
        error: '',
        users: [],
        status: ''
    },
    reducers: {
        resetStatus: (state) => {
            state.status = '';
        }
    },
    extraReducers: {
        [getUsers.pending]: (state) => {
            state.loading = true;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload;
        },
        [changeStatusRoleUserAction.pending]: (state) => {
            state.loading = true;
        },
        [changeStatusRoleUserAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [changeStatusRoleUserAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        },
        [changeStatusActiveUserAction.pending]: (state) => {
            state.loading = true;
        },
        [changeStatusActiveUserAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [changeStatusActiveUserAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        }
    }
})

const { reducer, actions } = manageUserSlice;
export const {
    resetStatus
} = actions
export default manageUserSlice.reducer;
