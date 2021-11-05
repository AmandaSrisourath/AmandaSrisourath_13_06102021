import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "../userSlice";
import Header from "../../app/components/Header";
import Footer from "../../app/components/Footer";
import userService from "../userService";

function Login() {
    const [email, setEmail] = useState('tony@stark.com');
    const [password, setPassword] = useState('password123');
    const dispatch = useDispatch();
    const history = useHistory();

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const token = await userService.login(email, password);
            if (token) {
                dispatch(setToken(token));
                history.push("/profile");
            }
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div>
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon"/>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" value={email} onChange={onEmailChange}/>
                        </div>

                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" value={password} onChange={onPasswordChange}/>
                        </div>

                        <div className="input-remember">
                            <input type="checkbox" id="remember-me"/>
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button onClick={onSubmit} className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Login;