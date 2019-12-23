import React from 'react';
import Joi from "joi-browser";
import Form from "./common/form";

class Registration extends Form {
    state = {
        formData: { userName: "", password: "", name: "" },
        errors:{}
    };

    schema = {
        userName:Joi.string().email().required().label("UserName"),
        password:Joi.string().min(5).required().label("Password"),
        name:Joi.string().required().label("Name")
    };

    render() {
        return (
            <div>
                <h1>Register!</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput("userName","UserName")}
                        {this.renderInput("password","Password","password")}
                        {this.renderInput("name","Name")}
                        {this.renderSubmitBun("Register")}
                    </form>

            </div>
        );
    }

    implSubmit(){
        //handle submit, send to server
        console.log("User registered");
    };
}

export default Registration;