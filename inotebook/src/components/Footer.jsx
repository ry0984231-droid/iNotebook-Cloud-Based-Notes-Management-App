import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="inotebook-footer">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-md-5">
                        <Link to="/" className="footer-brand">
                            iNotebook<span>.</span>
                        </Link>
                        <p className="footer-description">
                            Your personal space for ideas, notes, and inspiration.
                            Keep your thoughts organized and access them whenever
                            you need them.
                        </p>
                    </div>
                    <div className="col-6 col-md-3">
                        <h5 className="footer-heading">Quick Links</h5>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/addnote">Add Note</Link>
                            </li>
                            <li>
                                <Link to="/mynotes">My Note</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-6 col-md-4">
                        <h5 className="footer-heading">Your Account</h5>
                        <ul className="footer-links">
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>
                        © {new Date().getFullYear()} iNotebook.All rights reserved. </p>
                    <p className="footer-tagline">Made for your thoughts.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

