import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'product',
    initialState: [],

    reducers: {
        addToCart: (state, action) => {
            const findProduct = state.find(
                (product) => product.id === action.payload.id
            );
            if (findProduct) {
                findProduct.quantity += 1;
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
            }
            localStorage.setItem("cart", JSON.stringify(state));
        },
        deleteFromCart: (state, action) => {
            const updateState = state.filter((Product) => (Product.id !== action.payload.id))
            state.length = 0;
            state.push(...updateState)
            localStorage.setItem("cart", JSON.stringify(state))
        },
        clear: (state, action) => {
            state.length = 0
            localStorage.removeItem("cart")
        },


    },

})
export const { addToCart, deleteFromCart, clear } = cartSlice.actions;

export default cartSlice.reducer;