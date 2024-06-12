import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        location: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:5000/api/createUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.errors) {
                    alert(data.errors[0].msg);
                } else {
                    alert('Account created successfully!');
                    navigate('/login');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <Navbar />
            <div className="p-3 w-100 m-auto mt-5" style={{ maxWidth: '500px', height: 'calc(100vh - 240px)' }}>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input className="form-control" id="name" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email address
                        </label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" onChange={handleChange} />
                        <div id="emailHelp" className="form-text">
                            We'll never share your email with anyone else.
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input type="password" className="form-control" id="password" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="location" className="form-label">
                            Location
                        </label>
                        <input className="form-control" id="location" onChange={handleChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
