import {   createSlice } from "@reduxjs/toolkit";

export type CounterStore = {
    counterVal:number;
    
}

export type CounterAction = {
    type:string,
    
}
const initialState:CounterStore = { counterVal : 0 };

/*const inc1 = createAction<number>("inc1");
const dec2 = createAction<number>("dec1");

const counterReducer = createReducer(initialState,(builder)=>{
    builder.addCase(inc,(state,action)=> state.counter += action.payload)
    .addCase(dec,(state,action)=>state.counter-=action.payload)
    .addDefaultCase(()=>{})
});*/



const counterSlice = createSlice(
{
    name : "AppCounter",
    initialState: initialState,
    reducers: {
        inc: (state,{payload}) => {state.counterVal+= payload.counterVal},
        dec: (state,{payload}) => {state.counterVal-= payload.counterVal}
    }
}

);

export const {inc, dec} = counterSlice.actions;
export default counterSlice.reducer;



