import {createSlice} from "@reduxjs/toolkit"
const appSlice = createSlice({
    name: "eee",
    initialState: {
        addVal : "hii",
        subVal: "hello"
    },
    reducers: {
        add: (state, action) => {
            console.log(state, state.addVal, action);
            state.addVal = action.payload
        },
        sub: (state) => {
            console.log(state);
        }
    }
})
console.log(appSlice);

export const {add} = appSlice.actions;
export default appSlice.reducer;




// {name: 'AppSlice', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}
// actions
// : 
// add
// : 
// ƒ actionCreator()
// sub
// : 
// ƒ actionCreator()
// [[Prototype]]
// : 

// Object
// caseReducers
// : 
// add
// : 
// (state, action) => { state.add = action; }
// sub
// : 
// state => { console.log(state); }
// [[Prototype]]
// : 

// Object
// getInitialState
// : 
// ƒ ()

// name
// : 
// "AppSlice" [name keyword from slice]

// reducer
// : 
// ƒ (state, action)
// [[Prototype]]
// : 
// Object
