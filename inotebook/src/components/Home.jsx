import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const isLoggedIn = Boolean(localStorage.getItem('token'));

    return (
        <div className="container text-center my-5">
            <div className="p-5 bg-light rounded-4 shadow-sm">
                <h1 className="display-4 fw-bold">
                    Welcome to <span className="text-primary">iNotebook</span>
                </h1>

                <p className="lead text-muted mt-3">
                    Your personal space to create, edit and manage your notes.
                    Keep your important ideas organized in one place.
                </p>

                <div className="mt-4">
                    {isLoggedIn ? (
                        <>
                            <Link to="/addnote" className="btn btn-primary btn-lg me-2">
                                <i className="fa-solid fa-plus me-2"></i>
                                Add Note
                            </Link>

                            <Link to="/mynotes" className="btn btn-outline-primary btn-lg">
                                My Notes
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link to="/signup" className="btn btn-primary btn-lg me-2">
                                Get Started
                            </Link>

                            <Link to="/login" className="btn btn-outline-primary btn-lg">
                                Login
                            </Link>
                        </>
                    )}
                </div>
            </div>

            <div className="row mt-5 g-4">
                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 p-3">
                        <div className="card-body">
                            <i className="fa-solid fa-pen-to-square fa-2x text-primary mb-3"></i>
                            <h4>Create Notes</h4>
                            <p className="text-muted">
                                Write down your ideas and important information.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 p-3">
                        <div className="card-body">
                            <i className="fa-solid fa-folder-open fa-2x text-success mb-3"></i>
                            <h4>Manage Notes</h4>
                            <p className="text-muted">
                                Edit and delete your notes whenever you want.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card h-100 shadow-sm border-0 p-3">
                        <div className="card-body">
                            <i className="fa-solid fa-book-open fa-2x text-warning mb-3"></i>
                            <h4>Stay Organized</h4>
                            <p className="text-muted">
                                Keep your important information in one place.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;

