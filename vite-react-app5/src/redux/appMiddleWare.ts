
import { Middleware } from "redux";


const loggerMW: Middleware = (store) => (next) => (action) => {
    console.log("Logger MW = ", action, "Store = ", store);
    return next(action);
}


export default loggerMW;