import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Card({ item }) {
    const navigate = useNavigate();
    const { img, name, description, options } = item;

    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState(Object.keys(options[0])[0]);

    const addToCart = () => {
        if (!localStorage.getItem('token')) {
            alert('Please login to add items to cart');
            navigate('/login');
            return;
        }

        fetch('http://localhost:5000/api/cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ item, quantity, size }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Item added to cart');
                } else {
                    alert('Failed to add item to cart');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="card" style={{ maxHeight: '400px' }}>
            <img src={img} className="card-img-top" style={{ height: '218px' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <div className="d-flex align-items-center gap-2 mb-3">
                    <select className="form-control-sm" value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select className="form-control-sm" value={size} onChange={(e) => setSize(e.target.value)} >
                        {Object.keys(options[0]).map((key) => <option key={key} value={key}>{key}</option>)}
                    </select>
                    <span>Rs. {options[0][size] * quantity}</span>
                </div>
                <button className="btn btn-primary btn-sm" onClick={addToCart}>
                    Cart
                </button>
            </div>
        </div>
    );
}
