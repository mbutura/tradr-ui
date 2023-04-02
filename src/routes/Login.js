import '../theme.css';
import React, { useState } from 'react';
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loginError, setLoginError] = useState("");

    // eslint-disable-next-line
    const navigate = useNavigate();

    const handleSubmit = async(e) => {
        /*Prevent default form clearance behaviour after posting*/
        e.preventDefault();

        const loginRequestHeader = { "Content-Type": "application/json"};
        const loginRequestBody = { username: username, password: password};
        
        let response = undefined
        
        try {
            response = await fetch("/login", {
                method: "POST",
                headers: loginRequestHeader,
                body: JSON.stringify(loginRequestBody),
              });
        } catch (error){
            console.log("halloooo")
        }

        // Uses the 'optional chaining' operator
        if (response?.ok) {
            navigate("/dashboard");
        } else if (response['status'] === 401){
            setLoginError('Invalid username or password')
        } else {
            setLoginError('Login error')
        }
    }

    return (
    <div class="login-background">
        <Header />
        <div class="jumbotron vertical-center extend-height">
            <div class="container mt-5">
                <div class="row justify-content-center ">
                    <div class="col-md-6 col-lg-4">
                        <div class="card shadow align-middle">
                            <div class="card-body">
                                <form onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <label htmlfor="username" class="form-label color-655DBB"><strong>Username</strong></label>
                                        <input type="text" class="form-control" id="username" name="username" value={username} placeholder="Username*" onChange={(e) => setUsername(e.target.value)} required />
                                    </div>
                                    <div class="mb-3">
                                        <label htmlfor="password" class="form-label color-655DBB"><strong>Password</strong></label>
                                        <input type="password" class="form-control" id="password" name="password" value={password} placeholder="Password*" onChange={(e) => setPassword(e.target.value)} required />
                                    </div>
                                    <div class="d-grid gap-2">
                                        <button class="btn color btn-theme-color" type="submit">Log in</button>
                                    </div>
                                    {(loginError.length > 0)&&<p  className="text-danger">{loginError}</p> }
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
};

export default Login;