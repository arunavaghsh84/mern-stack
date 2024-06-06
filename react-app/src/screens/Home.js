import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import Card from '../components/Card';

export default function Home() {
    const [foodItems, setFoodItems] = useState([]);
    const [foodCategories, setFoodCategories] = useState([]);
    const [search, setSearch] = useState('');

    const handleChangeSearch = (value) => {
        setSearch(value);
    };

    const loadData = async () => {
        const response = await fetch('http://localhost:5000/api/foodItems', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });

        response.json().then((data) => {
            setFoodItems(data.foodItems);
            setFoodCategories(data.foodCategories);
        });
    };

    useEffect(() => {
        loadData();
    }, []);

    return (
        <>
            <Navbar />
            <Carousel search={search} onChangeSearch={handleChangeSearch} />
            <div className="album py-5 bg-body-tertiary">
                <div className="container">
                    {foodCategories.map((category, index) => {
                        const filtered = foodItems.filter((foodItem) => foodItem.CategoryName === category.CategoryName && foodItem.name.toLowerCase().includes(search.toLowerCase()));

                        if (filtered.length === 0) {
                            return null;
                        }

                        return <div key={index} className="mb-5">
                            <div className='fs-3 my-3'>{category.CategoryName}</div>
                            <hr />
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-3">
                                {filtered.map((foodItem) => <div key={foodItem._id} className="col">
                                    <Card item={foodItem} />
                                </div>)}
                            </div>
                        </div>
                    })}
                </div>
            </div>
            <Footer />
        </>
    );
}
