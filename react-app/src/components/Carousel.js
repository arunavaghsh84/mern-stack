import React from 'react';
import SearchBar from './SearchBar';

export default function Carousel({ search, onChangeSearch: handleChangeSearch }) {
    return (
        <div id="carouselExample" className="carousel slide carousel-fade" style={{ objectFit: 'contain' }}>
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                ></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" id="carousel">
                <div className="carousel-caption z-2">
                    <SearchBar value={search} onChange={handleChangeSearch} />
                </div>
                <div className="carousel-item active">
                    <img
                        src="https://source.unsplash.com/random/900×700?burger"
                        className="d-block w-100"
                        style={{ filter: 'brightness(30%)' }}
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://source.unsplash.com/random/900×700?pizza"
                        className="d-block w-100"
                        style={{ filter: 'brightness(30%)' }}
                        alt="..."
                    />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://source.unsplash.com/random/900×700?roasted_chicken"
                        className="d-block w-100"
                        style={{ filter: 'brightness(30%)' }}
                        alt="..."
                    />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
