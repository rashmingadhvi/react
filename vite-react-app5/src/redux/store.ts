import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

import { thunk } from "redux-thunk";
import loggerMW from "./appMiddleWare";

const appStore = configureStore({
    reducer: counterReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerMW, thunk])
    
});

export default appStore;