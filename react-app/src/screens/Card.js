import React from 'react';
import { Link } from 'react-router-dom';

export default function Card() {
    return (
        <div className="card" style={{ maxHeight: '400px' }}>
            <img src="https://source.unsplash.com/random?burger" className="card-img-top" style={{ height: '218px' }} alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is some important text.</p>
                <div className="d-flex align-items-center gap-2 mb-3">
                    <select className="form-control-sm">
                        {Array.from({ length: 10 }, (_, i) => (
                            <option key={i} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                    <select className="form-control-sm">
                        <option value="0.5">half</option>
                        <option value="1">full</option>
                    </select>
                    <span>Rs. 100</span>
                </div>
                <Link to="/" className="btn btn-primary btn-sm">
                    Cart
                </Link>
            </div>
        </div>
    );
}
