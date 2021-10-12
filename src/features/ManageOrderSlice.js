import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getManageByPage } from '../api/product';
import { getTotalPage } from '../ultils';
import { changeStatusOrder } from './../api/order';

export const getOrder = createAsyncThunk('manageOrder/getOrder', async (params) => {
    let totalProduct;
    let totalPage;
    let res = await getManageByPage("orders", params);
    if (res && res.status == 200) {
        totalProduct = res.headers["x-total-count"];
        totalPage = getTotalPage(totalProduct, params._limit);
        return {
            data: res.data,
            totalProduct, totalPage
        };
    }
});

export const changeStatusOrderAction = createAsyncThunk('manageOrder/changeStatusOrder',
    async (params) => {
        let res = await changeStatusOrder("orders", params.id, params.status);
        if (res && res.status == 200) {
            return 'changeStatusOrderSuccess';
        }
        return 'changeStatusOrderFailed';
    });

const manageOrderSlice = createSlice({
    name: 'manageOrder',
    initialState: {
        loading: false,
        error: '',
        orders: [],
        status: '',
        totalPage: '',
        pagination: {
            _page: 1,
            _limit: 10
        }
    },
    reducers: {
        resetStatus: (state) => {
            state.status = '';
        },
        setPage: (state, action) => {
            state.pagination._page = action.payload;
        }
    },
    extraReducers: {
        [getOrder.pending]: (state) => {
            state.loading = true;
        },
        [getOrder.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getOrder.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload.data;
            state.totalPage = parseInt(action.payload.totalPage);
        },
        [changeStatusOrderAction.pending]: (state) => {
            state.loading = true;
        },
        [changeStatusOrderAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [changeStatusOrderAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        }
    }
})

const { reducer, actions } = manageOrderSlice;
export const {
    resetStatus,
    setPage
} = actions
export default manageOrderSlice.reducer;
