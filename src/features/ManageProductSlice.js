import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createProduct, getManageByPage, updateProduct } from '../api/product';
import { getTotalPage } from '../ultils';
import { deleteProduct } from './../api/product';

export const getProducts = createAsyncThunk('manageProduct/getProducts', async (params) => {
    let totalProduct;
    let totalPage;
    let res = await getManageByPage("products", params);
    if (res && res.status == 200) {
        totalProduct = res.headers["x-total-count"];
        totalPage = getTotalPage(totalProduct, params._limit);
        return {
            data: res.data,
            totalProduct, totalPage
        };
    }
});

export const handleCreateProduct = createAsyncThunk('manageProduct/handleCreateProduct', async (params) => {
    let res = await createProduct("products", params);
    if (res && res.status == 201) {
        return 'createProductSuccess';
    }
    return 'createProductFailed'
});

export const handleUpdateProduct = createAsyncThunk('manageProduct/handleUpdateProduct', async (params) => {
    let res = await updateProduct("products", params.id, params);
    if (res && res.status == 200) {
        return 'updateProductSuccess';
    }
    return 'updateProductFailed';
});

export const handleDeleteProduct = createAsyncThunk('manageProduct/handleDeleteProduct', async (params) => {
    let res = await deleteProduct("products", params);
    if (res && res.status == 200) {
        return 'deleteProductSuccess';
    }
    return 'deleteProductFailed';
});

const manageProductSlice = createSlice({
    name: 'manageProduct',
    initialState: {
        loading: false,
        error: '',
        products: [],
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
        [getProducts.pending]: (state) => {
            state.loading = true;
        },
        [getProducts.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload.data;
            state.totalPage = parseInt(action.payload.totalPage);
        },
        [handleCreateProduct.pending]: (state) => {
            state.loading = true;
        },
        [handleCreateProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [handleCreateProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        },
        [handleUpdateProduct.pending]: (state) => {
            state.loading = true;
        },
        [handleUpdateProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [handleUpdateProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        },
        [handleDeleteProduct.pending]: (state) => {
            state.loading = true;
        },
        [handleDeleteProduct.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        },
        [handleDeleteProduct.fulfilled]: (state, action) => {
            state.loading = false;
            state.status = action.payload;
        }
    }
})

const { reducer, actions } = manageProductSlice;
export const {
    resetStatus,
    setPage
} = actions
export default manageProductSlice.reducer;
