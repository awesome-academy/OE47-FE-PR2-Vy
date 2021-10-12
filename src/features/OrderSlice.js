import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createOrder, getOrdersByUser } from './../api/order';

export const createOrderAction = createAsyncThunk('order/createOrderAction', async (params) => {
    let res = await createOrder("orders", params);
    if (res && res.status == 201) {
        return 'orderSuccess';
    }
    return 'orderFailed';
});

export const getOrdersByUserAction = createAsyncThunk('order/getOrdersByUser', async (params) => {
    let res = await getOrdersByUser("orders", params);
    if (res && res.status == 200) {
        return res.data;
    }
});

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        loading: false,
        status: '',
        error: '',
        orders: []
    },
    reducers: {
        resetOrder: (state) => {
            state.loading = false;
            state.status = '';
            state.error = '';
        }
    },
    extraReducers: {
        [createOrderAction.pending]: (state) => {
            state.loading = true;
        },
        [createOrderAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [createOrderAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        },
        [getOrdersByUserAction.pending]: (state) => {
            state.loading = true;
        },
        [getOrdersByUserAction.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getOrdersByUserAction.fulfilled]: (state, action) => {
            state.loading = false;
            state.orders = action.payload;
        }
    }
})

const { reducer, actions } = orderSlice;
export const {
    resetOrder
} = actions
export default orderSlice.reducer;
