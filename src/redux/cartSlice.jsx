import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify"
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
                toast.success('Custom Success Notification', {
                    position: 'bottom-left', // Set the position of the notification

                });
            } else {
                const productClone = { ...action.payload, quantity: 1 };
                state.push(productClone);
                toast.success('success add product to cart', {
                    position: 'bottom-left', // Set the position of the notification
                });
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