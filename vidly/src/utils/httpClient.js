import axios from 'axios';
import {toast} from 'react-toastify';
import * as logger from '../services/logService';

axios.interceptors.response.use(null,error=>{

    const expectedError = error && error.status>=400 && error.status<500;
    if(!expectedError){
        logger.error(error);
        toast.error("Unknown error!");
    }
    return Promise.reject(error);
});

export default {
    get:axios.get,
    put:axios.put,
    post:axios.post,
    delete:axios.delete
}