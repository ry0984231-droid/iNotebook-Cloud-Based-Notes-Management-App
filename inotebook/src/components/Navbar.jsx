import React, { useEffect } from 'react'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        console.log(location.pathname);
    })
    const handlelogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? "active" : ""} `} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? "active" : ""} `} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/mynotes' ? "active" : ""} `} to="/mynotes">My Notes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/addnote' ? "active" : ""} `} to="/addnote">AddNote</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem("token") ? <form className="d-flex mx-2">
                            <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
                            <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
                        </form> : <button onClick={handlelogout} className="btn btn-primary" type="button">Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar


