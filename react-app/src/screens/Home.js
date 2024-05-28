import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Card from './Card';

export default function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                        <div className="col">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
