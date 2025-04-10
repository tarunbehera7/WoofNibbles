import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Order.css';
import Navbar from './Navbar';
import Footer from './Footer';

const Order = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const firstName = localStorage.getItem("firstName") || "User";

    useEffect(() => {
        axios.get('http://localhost:8080/api/admin/orders')
            .then(response => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='order-page'>
            <Navbar username={firstName}/>
            
            <div className="order-container">
                <h2 className="order-title">Orders</h2>
                {loading ? (
                    <p className="loading-text">Loading orders...</p>
                ) : (
                    <div className="table-wrapper">
                        <table className="order-table">
                            <thead>
                                <tr>
                                    <th>Order ID</th>
                                    <th>Customer</th>
                                    <th>Total Price</th>
                                    <th>Status</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.length > 0 ? (
                                    orders.map(order => (
                                        <tr key={order.id}>
                                            <td>{order.id}</td>
                                            <td>{order.customerName}</td>
                                            <td>₹ {order.totalPrice}</td>
                                            <td>
                                                <span className={`status ${order.status.toLowerCase()}`}>
                                                    {order.status}
                                                </span>
                                            </td>
                                            <td>{order.address}</td>
                                            <td>{new Date(order.date).toLocaleDateString()}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="5" className="no-orders">No orders available</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
            
            <Footer/>
        </div>
    );
};

export default Order;