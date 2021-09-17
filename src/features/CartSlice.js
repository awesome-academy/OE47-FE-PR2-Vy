import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: {
        products: [],
        total: 0
    },
    justAddded: null
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setJustAdded: (state, action) => {
            state.justAddded = action.payload;
        },
        setTotal: (state, action) => {
            state.cart.total = action.payload;
        },
        setProducts: (state, action) => {
            state.cart.products = action.payload.products;
        }
    }
})


const { reducer, actions } = cartSlice;

export const {
    handsetJustAdded,
    setTotal,
    setProducts
} = actions;

export default cartSlice.reducer;
