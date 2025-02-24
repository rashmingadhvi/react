import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

import { thunk } from "redux-thunk";
import loggerMW from "./appMiddleWare";
import dataReducer from "./dataSlice";

const appStore = configureStore({
    reducer: {counter: counterReducer, movie: dataReducer},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([loggerMW, thunk])
    
});

export default appStore;