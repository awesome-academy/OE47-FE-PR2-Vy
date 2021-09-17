import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProductDetail } from '../api/productDetail';

export const getProductDetails = createAsyncThunk('product/getProductDetails', async (id) => {
    let res = await getProductDetail("products", id);
    if (res && res.status == 200) {
        return res.data;
    }
});

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState: {
        product: {},
        loading: false,
        error: '',
    },
    reducers: {},
    extraReducers: {
        [getProductDetails.pending]: (state) => {
            state.loading = true;
        },
        [getProductDetails.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getProductDetails.fulfilled]: (state, action) => {
            state.loading = false;
            state.product = action.payload;
        }
    }
});

const { reducer, actions } = productDetailSlice;
export const { extraReducers } = actions;
export default productDetailSlice.reducer;
