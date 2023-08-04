import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICounterState {
  value: number;
  message: string;
}

const initialState: ICounterState = {
  value: 0,
  message: "NA",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers:{
      incr: (state) => {console.log("Inc called.");state.value++;},
      dec: (state)=>{state.value--;},
      incAmount: (state, action: PayloadAction<number>) =>{ state.value += action.payload | 0;      },
      reset: (state)=>{state.value=0;},
  },

});

export const {incr, dec, incAmount, reset} = counterSlice.actions;

export default counterSlice.reducer;
