import React from 'react';

export default function SearchBar({ value, onChange: handleChange }) {
    return (
        <div className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(e) => handleChange(e.target.value)} />
        </div>
    );
}
