import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";
import {toast} from "react-toastify";
import {register} from "../services/registerService";
import * as authsvc from '../services/authService';

class Registration extends Form {
    state = {
        formData: { email: "", password: "", name: "" },
        errors:{}
    };

    schema = {
        email:Joi.string().email().required().label("UserName"),
        password:Joi.string().min(5).required().label("Password"),
        name:Joi.string().required().label("Name")
    };

    render() {
        return (
            <div>
                <h1>Register!</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("email","UserName")}
                        {this.renderInput("password","Password",null,"password")}
                        {this.renderInput("name","Name")}
                        {this.renderSubmitBun("Register")}
                    </form>

            </div>
        );
    }

    async implSubmit(){
        try{
            const {formData} = this.state;
            const {headers} = await register(formData);
            authsvc.takeHome(headers);

        }catch (e) {
            if(e.response && e.response.status===400){
                toast.error(e.response.data);
            }

        }
    };
}

export default Registration;