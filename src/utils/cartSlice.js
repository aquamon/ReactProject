import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState : {
        items : [],
    },
    reducers : {
        addItem : (state , action)=>{
            state.items.push(action.payload);
        },

        clearCart : (state) =>{
             state.items = [];
        },

        removeItem : (state)=>{
            state.items.pop();
        }

    }
})

export default cartSlice.reducer;
 
export const {addItem , clearCart , removeItem} = cartSlice.actions;