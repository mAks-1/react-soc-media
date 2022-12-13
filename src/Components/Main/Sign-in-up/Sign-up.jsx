import React from "react";
import './sign-in-up.css';
import bg from '../../../assets/signinup.jpg';
import {NavLink} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="container">
            <img className="bg" src={bg} alt=""/>
            <div className="wrapper registerWrapper">
                <h1 className="logo">Registration</h1>
                <h2>Welcome onboard with us!</h2>

                <form name="registration">
                    <p className="userInfo">First name</p>
                    <input placeholder="Enter your first name" minLength="2" maxLength="15"
                           className="inputUserInfo check" name="userFirstName" type="text"/>
                    <p className="rightSide red">Це поле обов'язкове для вводу</p>
                    <p className="userInfo">Last name</p>
                    <input placeholder="Enter your last name" minLength="2" maxLength="15"
                           className="inputUserInfo check" name="userLastName" type="text"/>
                    <p className="rightSide red">Це поле обов'язкове для вводу</p>
                    <p className="userInfo">Username</p>
                    <input placeholder="Enter your username" minLength="2" maxLength="15"
                           className="inputUserInfo check" name="username" type="text"/>
                    <p className="rightSide red">Це поле обов'язкове для вводу</p>
                    <p className="userInfo">Email</p>
                    <input placeholder="Enter your email" className="inputUserInfo check" type="email"/>
                    <p className="rightSide red">Це поле обов'язкове для вводу</p>
                    <p className="userInfo">Password</p>
                    <div>
                        <input placeholder="Enter your password" minLength="8" maxLength="18"
                               className="inputUserInfo position check" id="password" name="password"
                               type="password"/>
                        <p className="rightSide red">Це поле обов'язкове для вводу</p>
                        <i className="bi bi-eye-slash" id="togglePassword"></i>
                    </div>
                    <p className="forgotPassword newPassword rightSide">Suggest a strong password?</p>
                    <input className="submit" type="submit" value="Register"/>
                    <p className="newUser">Already have an account?
                        {/*<a className="register login" href="#">Login</a>*/}
                        <NavLink className="register login" to="/sign-in">Login</NavLink>
                        Here</p>
                </form>
            </div>
        </div>
    )
}

export default SignUp;