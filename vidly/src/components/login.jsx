import React from 'react';
import Joi from 'joi-browser'
import Form from "./common/form";
import * as loginsvc from '../services/authService';
import {toast} from "react-toastify";

class Login extends Form {

    state = {
        formData: { userName: "", password: "" },
        errors:{}
    };

    schema = {
        userName:Joi.string().required().label("UserName"),
        password:Joi.string().required().label("Password")
    };

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("userName","UserName")}
                    {this.renderInput("password","Password",null,"password")}
                    {this.renderSubmitBun("Login")}
                </form>
            </div>

        );
    };

    async implSubmit(){
        try{
            await loginsvc.login(
                {email:this.state.formData.userName
                    , password:this.state.formData.password
                });
            window.location="/";
        }catch (e) {
            if(e.response && e.response.status===400){
                toast.error(e.response.data);
            }
        }
    };




}

export default Login;