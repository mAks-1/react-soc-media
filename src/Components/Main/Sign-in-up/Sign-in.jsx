import React from "react";
import './sign-in-up.css';
import bg from '../../../assets/signinup.jpg';
import {NavLink} from "react-router-dom";

const SignIn = () => {
    return (
        <div className="container">
            <img className="bg" src={ bg } alt=""/>
            <div className="wrapper hide">
                <h1 className="logo">Login</h1>
                <h2>Welcome!</h2>

                <form name="loginForm">
                    <p className="userInfo">Username</p>
                    <input placeholder="Enter your username" minLength="2" maxLength="15" name="userName"
                           className="inputUserInfo check1" type="text"/>
                    <p className="rightSide red1">Це поле обов'язкове для вводу</p>
                    <p className="userInfo">Password</p>
                    <div>
                        <input placeholder="Enter your password" minLength="8" maxLength="18"
                               className="inputUserInfo position check1" id="password1" name="password"
                               type="password"/>
                        <p className="rightSide red1">Це поле обов'язкове для вводу</p>
                        <i className="bi bi-eye-slash" id="togglePassword1"></i>
                    </div>
                    <p className="forgotPassword rightSide">Forgot Password?</p>
                    <input className="submit" name="submit" type="submit" value="Login"/>
                    <p className="newUser">New to logo?
                        <NavLink className="register" to="/sign-up">Register</NavLink>
                        Here</p>
                </form>
            </div>
        </div>
    )
}

export default SignIn;

//{
//  "rules": {
//    ".read": "now < 1673388000000",  // 2023-1-11
//    ".write": "now < 1673388000000",  // 2023-1-11
//  }
//}