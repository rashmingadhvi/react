import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counterSlice";
import empSlice from "./slices/empSlice";

export const appStore = configureStore({
    reducer: {
        counter: counterSlice,
        empsvc: empSlice,
    }
});

export type RootState = ReturnType<typeof appStore.getState>;

export type AppDispatch = typeof appStore.dispatch;