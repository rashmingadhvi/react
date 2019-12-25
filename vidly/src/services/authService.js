import httpClient from "../utils/httpClient";
import { apiUrl } from "../config.json";
import {toast} from "react-toastify";
import jwtDecode from "jwt-decode";

const apiEndpoint = apiUrl + "/auth";
const tokenKey ="token";

httpClient.setAuthToken(getCurrentToken());

export async function login(login){
    const {data:jwt}  = await httpClient.post(apiEndpoint, login);
    if(jwt){
        localStorage.setItem(tokenKey,jwt);

    }
    return Promise.resolve();
}

export function logout(){
    localStorage.removeItem(tokenKey);
    httpClient.setAuthToken(null);
    window.location="/login";
}

export function takeHome(headers){
    const jwt =headers.get("x-auth-token");
    if(jwt){
        toast.success("Success!");
        localStorage.setItem(tokenKey,jwt);
        window.location="/";
    }
}

export function getLoggedInUser(){
    try{
        const jwt = localStorage.getItem(tokenKey);
        const payload = jwtDecode(jwt);
        if(payload && payload.name){
            return payload;
        }
    }catch (e) {

    }
    return "";
}

export function getCurrentToken() {
    return localStorage.getItem(tokenKey);
}

export default {
    getLoggedInUser
}