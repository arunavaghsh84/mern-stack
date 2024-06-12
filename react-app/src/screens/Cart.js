import React, { useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart, useCartDispatch } from '../contexts/CartContext';
import useUserIdFromToken from '../hooks/useUserIdFromToken';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const cart = useCart();
    const navigate = useNavigate();
    const dispatch = useCartDispatch();
    const userId = useUserIdFromToken();

    const totalAmount = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.options[0][item.size] * item.quantity, 0);
    }, [cart]);

    const handleCheckout = () => {
        fetch('http://localhost:5000/api/createOrder', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId,
                date: new Date(),
                total: totalAmount,
                items: cart.map((item) => ({
                    _id: item._id,
                    name: item.name,
                    quantity: item.quantity,
                    size: item.size,
                    amount: item.options[0][item.size] * item.quantity,
                })),
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.success) {
                    alert('Checkout successful!');
                    dispatch({ type: 'cleared' });
                    navigate('/orders');
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <Navbar />
            <div className="container mt-5" style={{ height: 'calc(100vh - 240px)' }}>
                {cart.length > 0 ? (
                    <>
                        <div className="fs-3 my-3">My Cart</div>
                        <hr />
                        <div className="table-responsive">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th className="fs-5 text-success" scope="col">
                                            #
                                        </th>
                                        <th className="fs-5 text-success" scope="col">
                                            Name
                                        </th>
                                        <th className="fs-5 text-success" scope="col">
                                            Quantity
                                        </th>
                                        <th className="fs-5 text-success" scope="col">
                                            Option
                                        </th>
                                        <th className="fs-5 text-success" scope="col">
                                            Amount
                                        </th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <Item key={item._id} item={item} index={index} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <h2 className="display-5 fw-bold text-center">Total Price: Rs. {totalAmount}</h2>
                        <button className="btn btn-success" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </>
                ) : (
                    <h2 className="display-5 fw-bold text-center">This cart is empty</h2>
                )}
            </div>
            <Footer />
        </>
    );
}

function Item({ item, index }) {
    const { name, quantity, size, options } = item;

    const dispatch = useCartDispatch();
    const handleRemove = () => {
        dispatch({
            type: 'deleted',
            payload: item,
        });
    };

    return (
        <tr>
            <th className="align-middle" scope="row">
                {index + 1}
            </th>
            <td className="align-middle">{name}</td>
            <td className="align-middle">{quantity}</td>
            <td className="align-middle">{size}</td>
            <td className="align-middle">Rs. {options[0][size] * quantity}</td>
            <td>
                <button className="btn btn-danger" onClick={handleRemove}>
                    Remove
                </button>
            </td>
        </tr>
    );
}
