import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
    name: "customers",
    initialState: {
        list: JSON.parse(localStorage.getItem("customers")) || [],
    },
    reducers: {
        addCustomer: (state, action) => {
            state.list.push(action.payload);
            localStorage.setItem("customers", JSON.stringify(state.list));
        },
        removeCustomer: (state, action) => {
            state.list = state.list.filter((customer) => customer.id !== action.payload);
            localStorage.setItem("customers", JSON.stringify(state.list));
        },
        clearAllCustomer:(state)=>{
            state.list = [];
            localStorage.removeItem("customers")
            return;
        }
    }
})

export const { addCustomer,removeCustomer,clearAllCustomer } = customerSlice.actions;
export default customerSlice.reducer;