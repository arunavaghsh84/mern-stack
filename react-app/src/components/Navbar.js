import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-success sticky-top">
            <div className="container-fluid">
                <Link className="navbar-brand fs-1" to="/">
                    GoFood
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">
                                {' '}
                                Home{' '}
                            </Link>
                        </li>
                    </ul>
                    <div className="d-flex gap-3">
                        {localStorage.getItem('token') ? (
                            <>
                                <Link className="nav-link" to="/orders">
                                    My Orders
                                </Link>
                                <Link className="nav-link" to="/cart">
                                    Cart
                                </Link>
                                <button className="nav-link" onClick={handleLogout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link className="nav-link" to="/login">
                                    {' '}
                                    Login{' '}
                                </Link>
                                <Link className="nav-link" to="/signup">
                                    {' '}
                                    Signup{' '}
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
}
