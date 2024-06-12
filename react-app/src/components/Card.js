import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, useCartDispatch } from '../contexts/CartContext';

export default function Card({ item }) {
    const navigate = useNavigate();
    const { _id, img, name, description, options } = item;

    const cart = useCart();
    const dispatch = useCartDispatch();

    const cartedItem = useMemo(() => cart.find((item) => item._id === _id), [cart, _id]);

    const [quantity, setQuantity] = useState(cartedItem?.quantity || 1);
    const [size, setSize] = useState(cartedItem?.size || Object.keys(options[0])[0]);

    const addToCart = () => {
        if (!localStorage.getItem('token')) {
            alert('Please login to add items to cart');
            navigate('/login');
            return;
        }

        dispatch({
            type: 'added',
            payload: { ...item, quantity, size },
        });
    };

    const handleUpdate = () => {
        dispatch({
            type: 'changed',
            payload: { ...item, quantity, size },
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
                    <select className="form-control-sm" value={size} onChange={(e) => setSize(e.target.value)}>
                        {Object.keys(options[0]).map((key) => (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        ))}
                    </select>
                    <span>Rs. {options[0][size] * quantity}</span>
                </div>
                {!cartedItem ? (
                    <button className="btn btn-success btn-sm" onClick={addToCart}>
                        Cart
                    </button>
                ) : (
                    <button className="btn btn-warning btn-sm" onClick={handleUpdate}>
                        Update
                    </button>
                )}
            </div>
        </div>
    );
}
