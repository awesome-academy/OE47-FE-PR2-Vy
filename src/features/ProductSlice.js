import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getTotalPage } from '../ultils';
import { getProducts } from './../api/product';

export const getProduct = createAsyncThunk('product/getProduct', async (params, thunkAPI) => {

    let totalProduct;
    let totalPage;

    let res = await getProducts("products", params);
    if (res && res.status == 200) {
        totalProduct = res.headers["x-total-count"];
        totalPage = getTotalPage(totalProduct, params._limit);
    }
    return {
        data: res.data,
        totalProduct, totalPage
    };
})

export const getCategories = createAsyncThunk('product/getCategories', async () => {
    let res = await getProducts("categories");
    if (res && res.status == 200) {
        return res.data;
    }
})

export const getBrands = createAsyncThunk('product/getBrands', async () => {
    let res = await getProducts("brand");
    if (res && res.status == 200) {
        return res.data;
    }
})

export const getTags = createAsyncThunk('product/getTags', async () => {
    let res = await getProducts("tags");
    if (res && res.status == 200) {
        return res.data;
    }
})

export const getSize = createAsyncThunk('product/getSize', async () => {
    let res = await getProducts("size");
    if (res && res.status == 200) {
        return res.data;
    }
})

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: '',
        totalProduct: '',
        totalPage: '',
        categories: [],
        brands: [],
        tags: [],
        size: []
    },
    reducers: {},
    extraReducers: {
        [getProduct.pending]: (state) => {
            state.loading = true;
        },
        [getProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload.data;
            state.totalProduct = parseInt(action.payload.totalProduct);
            state.totalPage = parseInt(action.payload.totalPage);
        },
        [getCategories.pending]: (state) => {
            state.loading = true;
        },
        [getCategories.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        },
        [getBrands.pending]: (state) => {
            state.loading = true;
        },
        [getBrands.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getBrands.fulfilled]: (state, action) => {
            state.loading = false;
            state.brands = action.payload;
        },
        [getTags.pending]: (state) => {
            state.loading = true;
        },
        [getTags.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getTags.fulfilled]: (state, action) => {
            state.loading = false;
            state.tags = action.payload;
        },
        [getSize.pending]: (state) => {
            state.loading = true;
        },
        [getSize.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error
        },
        [getSize.fulfilled]: (state, action) => {
            state.loading = false;
            state.size = action.payload;
        },
    }
})

const { reducer, actions } = productSlice;

export const { extraReducers } = actions;

export default productSlice.reducer;
