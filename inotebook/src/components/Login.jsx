import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const host = process.env.REACT_APP_API_URL
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${host}/api/user/loginuser`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: credentials.email, password: credentials.password })
            });
            const json = await response.json();
            if (response.ok && json.authtoken) {
                localStorage.setItem("token", json.authtoken);
                navigate("/", { replace: true });
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Unable to connect to the server");
        }
    };
    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };
    return (
        <div className="login-page">
            <section className="login-card">
                <div className="login-heading">
                    <span className="login-icon"><i className="fa-regular fa-note-sticky" aria-hidden="true" /></span>
                    <span className="login-eyebrow">WELCOME BACK</span>
                    <h1>Login to iNotebook</h1>
                    <p>Your notes are right where you left them.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={credentials.password} onChange={onChange} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">
                        <span>Login</span>
                        <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                    </button>
                </form>
                <p className="login-secure"><i className="fa-solid fa-lock" aria-hidden="true" /> Your account is private and secure</p>
            </section>
        </div>
    );
};

export default Login;

