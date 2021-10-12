import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export const getCartLocalStorage = createAsyncThunk('product/getCartLocalStorage', async () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = JSON.parse(localStorage.getItem('total')) || 0;
    return { cart, total };
});

export const getTotalByCart = (cart) => {
    return cart.reduce(function (accumulator, current) {
        return accumulator + (current.product.price * current.quantity);
    }, 0);;
}

export const isExist = (item1, item2) => {
    return _.isEqual(item1.product, item2.product) && _.isEqual(item1.size, item2.size);
}

export const addToBag = (params) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const { product, size, count } = params;
    let flag = false;
    for (let i = 0; i < cart.length; i++) {
        if (isExist(cart[i], params)) {
            const temp = cart[i].quantity;
            cart[i].quantity = temp + count;
            flag = true;
            break;
        }
    }
    if (!flag) {
        cart = [...cart, { product, size, quantity: count }];
    }
    return cart;
};

export const deleteItem = (params) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (let i = 0; i < cart.length; i++) {
        if (isExist(cart[i], params)) {
            cart.splice(i, 1);
            break;
        }
    }
    return cart;
};

export const handleChangeQuantity = (params, quantityChange) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    for (let i = 0; i < cart.length; i++) {
        if (isExist(cart[i], params)) {
            cart[i].quantity = quantityChange;
            break;
        }
    }
    return cart;
};

const initialState = {
    products: [],
    loading: 'false',
    error: '',
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setCarts: (state, action) => {
            state.products = action.payload;
        },
        setCartTotal: (state, action) => {
            state.total = action.payload;
        }
    },
    extraReducers: {
        [getCartLocalStorage.pending]: (state) => {
            state.loading = true;
        },
        [getCartLocalStorage.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error;
        },
        [getCartLocalStorage.fulfilled]: (state, action) => {
            state.loading = false;
            state.products = action.payload.cart;
            state.total = action.payload.total;
        }
    }
})
const { reducer, actions } = cartSlice;
export const {
    setCartTotal,
    setCarts
} = actions;
export default cartSlice.reducer;
