import React from 'react';
import Joi from 'joi-browser'
import Form from "./common/form";
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
                    {this.renderInput("password","Password","password")}
                    {this.renderSubmitBun("Login")}
                </form>
            </div>

        );
    };

    implSubmit(){
        //handle submit, send to server
        console.log("Logged in");
    };




}

export default Login;