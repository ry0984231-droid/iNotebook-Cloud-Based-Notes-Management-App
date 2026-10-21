import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Signup.css';


const Signup = () => {
    const host = process.env.REACT_APP_API_URL
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        name: "",
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password } = credentials;
        try {
            const response = await fetch(
                `${host}/api/user/createuser`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ name, email, password })
                }
            );
            const json = await response.json();
            if (response.ok && json.authtoken) {
                localStorage.setItem("token", json.authtoken);
                navigate("/", { replace: true });

            } else {
                alert(json.message || json.msg || "Signup failed");
            }
        } catch (error) {
            console.error("Signup error:", error);
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
        <div className="signup-page">
            <section className="signup-card">
                <div className="signup-heading">
                    <span className="signup-icon"><i className="fa-regular fa-note-sticky" aria-hidden="true" /></span>
                    <span className="signup-eyebrow">GET STARTED</span>
                    <h1>Create an Account</h1>
                    <p>Start keeping your ideas in one place.</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" placeholder="Enter your name" value={credentials.name} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={credentials.email} onChange={onChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" placeholder="Create a password" value={credentials.password} onChange={onChange} minLength={6} required />
                    </div>
                    <button type="submit" className="btn btn-primary w-100"><span>Sign Up</span><i className="fa-solid fa-arrow-right" aria-hidden="true" /></button>
                </form>
                <p className="signup-secure"><i className="fa-solid fa-lock" aria-hidden="true" /> Your account is private and secure</p>
            </section>
        </div>
    );
};

export default Signup;

