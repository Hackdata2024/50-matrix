import React, { Fragment, useRef, useState } from "react";
import "./Loginpage.css";
import Loader from "../Loader/Loader";
import { CiMail } from "react-icons/ci";
import { CiUnlock } from "react-icons/ci";
import { CiFaceSmile } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Loginpage = ({ location }) => {

    const navigate = useNavigate();


    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loading, setLoading] = useState(false);
    

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    });

    const [loginuser , setLoginuser] = useState({
        loginEmail:"",
        loginPassword:""
    });

    const { loginEmail , loginPassword } = loginuser;

    const { name, email, password } = user;

    const loginSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            console.log(loginuser);
            const response = await axios.post("/api/v1/login", loginuser);

            
            setLoading(false);
            navigate(`/`)
        } catch (error) {
            // Handle network or other errors
            console.error("Error:", error);
        }
    };

    const registerSubmit = async (e) => {
        e.preventDefault();
        try {
            
            setLoading(true);
            const response = await axios.post('/api/v1/register',user);
      
            
            setLoading(false);
      
            navigate('/');
          } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
          }
    };


    const registerDataChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const loginDataChange = (e) => {
        const { name, value } = e.target;
        setLoginuser({
            ...loginuser,
            [name]: value,
        });
    };

    const switchTabs = (e, tab) => {
        if (tab === "login") {
            switcherTab.current?.classList.add("shiftToNeutral");
            switcherTab.current?.classList.remove("shiftToRight");

            registerTab.current?.classList.remove("shiftToNeutralForm");
            loginTab.current?.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
            switcherTab.current?.classList.add("shiftToRight");
            switcherTab.current?.classList.remove("shiftToNeutral");

            registerTab.current?.classList.add("shiftToNeutralForm");
            loginTab.current?.classList.add("shiftToLeft");
        }
    };


    return (
        <Fragment>
            {loading ? (
                <Loader />
            ) : (
                <Fragment>
                    <div className="LoginSignUpContainer">
                        <div className="LoginSignUpBox">
                            <div>
                                <div className="login_signUp_toggle">
                                    <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                                    <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>
                            <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                                <div className="loginEmail">
                                    <CiMail />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="loginEmail"
                                        value={loginEmail}
                                        onChange={loginDataChange}
                                    />
                                </div>
                                <div className="loginPassword">
                                    <CiUnlock />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="loginPassword"
                                        value={loginPassword}
                                        onChange={loginDataChange}
                                    />
                                </div>
                                <input type="submit" value="Login" className="loginBtn" />
                            </form>
                            <form
                                className="signUpForm"
                                ref={registerTab}
                                onSubmit={registerSubmit}
                            >
                                <div className="signUpName">
                                    <CiFaceSmile />
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        required
                                        name="name"
                                        value={name}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpEmail">
                                    <CiMail />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        required
                                        name="email"
                                        value={email}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className="signUpPassword">
                                    <CiUnlock />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        required
                                        name="password"
                                        value={password}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <input type="submit" value="Register" className="signUpBtn" />
                            </form>
                        </div>
                    </div>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Loginpage;