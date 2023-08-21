import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: [],
    name: "cartSlice",
    reducers:{
        addToCart: (state, action)=>{
            const product = {...action.payload, amount: 1, totalprice: action.payload.price}
            state.push(product)
        },
        removeFromCart: (state, action) =>{
            return state.filter((el) => el.id !== action.payload.id)
        },
        resetCart: (state, action) => {
            return state = []
        },
        increaseCount: (state, action) => {
            let product = {...action.payload}
            product.amount++
            product.totalprice += product.price
            const index = state.findIndex((el) => el.id === product.id);
            state.splice(index,1,product)
        },
        decreaseCount: (state, action) => {
            let product = {...action.payload}
            product.amount--
            product.totalprice -= product.price
            const index = state.findIndex((el) => el.id === product.id);
            state.splice(index,1,product)
        }
    }
})

export const {addToCart, removeFromCart, resetCart, increaseCount, decreaseCount} = cartSlice.actions
export default cartSlice.reducer