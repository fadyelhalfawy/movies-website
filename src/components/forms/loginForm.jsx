import React from "react";
import Joi from "joi-browser";
import MainForm from "./mainForm";

export default class LoginForm extends MainForm {
    state = {
        account: {email: "", password: "" },
        errors: {}
    }

    schema = {
        email: Joi
            .string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
            .required()
            .label('Email'),

        password: Joi
            .string()
            .required()
            .label('Password')
    };

    render() {
        const { history } = this.props;

        return (
            <React.Fragment>

                <h1>Login</h1>

                <form>
                    {this.renderFormInput("email", "Email", 'Email@')}
                    {this.renderFormInput("password", "Password", 'password...', "Password")}

                    {this.renderCheckBox("Remember me", "checkBox")}

                    {this.renderButton("btn-outline-info", "Login", history, "/movies")}
                    {this.renderButton("btn-outline-danger", "Forget-Password", false, history, "/signup")}
                </form>

            </React.Fragment>
        );
    }
}