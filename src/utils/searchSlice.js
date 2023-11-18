import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: "Search",
    initialState: {
        val: '',
    },
    reducers: {
        inputVal: (state, action) => {
            console.log(action.payload, 'payload');
            state.val = action.payload
        }
    }
})

export const {inputVal} = searchSlice.actions;
export default searchSlice.reducer; 