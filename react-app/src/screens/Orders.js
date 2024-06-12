import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import useUserIdFromToken from '../hooks/useUserIdFromToken';

export default function Orders() {
    const userId = useUserIdFromToken();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        if (!userId) return;

        fetch(`http://localhost:5000/api/users/${userId}/orders`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((response) => response.json())
            .then((data) => {
                setOrders(data.orders);
            });
    }, [userId]);

    return (
        <>
            <Navbar />
            <div className="container mt-5" style={{ height: 'calc(100vh - 240px)' }}>
                {orders.length > 0 ? (
                    <>
                        <div className="fs-3 my-3">My Orders</div>
                        <hr />

                        {orders.map((order) => (
                            <div className="card my-3" key={order._id}>
                                <div className="card-body">
                                    <h5 className="card-title">Order ID: #{order._id}</h5>
                                    <p className="card-text">Date: {new Date(order.date).toLocaleDateString()}</p>
                                    <p className="card-text">Total: Rs. {order.total}</p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <h2 className="display-5 fw-bold text-center">Order not found</h2>
                )}
            </div>
            <Footer />
        </>
    );
}
