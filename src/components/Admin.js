import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import Navbar from "./Navbar";
import axios from "axios";
import Footer from "./Footer";
import adminIcon from "../Icons/admin.png";


const Admin = () => {

    const firstName = localStorage.getItem("firstName") || "User";
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch orders when the cmpnt mounts
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/admin/orders")
            .then((response) => {
                setOrders(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching orders:", error);
                setLoading(false);
            });
    }, []); // Empty dependency arr means it runs once on mount

    return (
        <>
            <Navbar username={firstName} />
            <div className="admin-container">
                {/* Sidebar */}
                <aside className="admin-sidebar">
                    <h2 className="admin-logo">
                        <img src={adminIcon} alt="Admin icon" className="admin-icon" />
                        Admin Panel </h2>
                    <ul className="admin-menu">
                        {/* <li className="active">Dashboard</li> */}
                        <li><a href="/home">Home</a></li>
                        {/* <li><a href="/user">User</a></li> */}
                        <li><a href="/products" >Products</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/admin">Admin</a></li>
                    </ul>
                </aside>

                {/* Main Content */}
                <main className="admin-main">
                    <h1 className="admin-title">Dashboard</h1>

                    {/* Overview Cards (Static for simplicity) */}
                    <div className="admin-overview">
                        {/* <div className="overview-card">
                            <h3><i className='bx bx-cart' role="img" style={{ fontSize: '24px', color: '#4CAF50' }}></i> Total Orders</h3>
                            <p>{orders.length}</p>
                        </div>
                        <div className="overview-card">
                            <h3> <i className='bx bx-user' role="img" style={{ fontSize: '24px', color: '#2196F3' }}></i> Total Users</h3>
                            <p>8</p>
                        </div>
                        <div className="overview-card">
                            <h3><i className='bx bx-box' role="img" style={{ fontSize: '24px', color: '#ff9800' }}></i>Total Products</h3>
                            <p>10</p>
                        </div>
                        <div className="overview-card">
                            <h3><i className='bx bx-dollar' role="img" style={{ fontSize: '24px', color: '#8BC34A' }}></i>Revenue</h3>
                            <p>
                                ₹ {orders
                                    .reduce((sum, order) => sum + order.totalPrice, 0)
                                    .toLocaleString()
                                }
                            </p>
                        </div> */}
                        <div className="overview-card">
                            <div className="overview-card-title">
                                <div className="overview-icon">
                                    <i className='bx bx-cart' style={{ fontSize: '20px', color: '#4CAF50' }}></i>
                                </div>
                                <h3>Total Orders</h3>
                            </div>
                            <p>{orders.length}</p>
                        </div>

                        <div className="overview-card">
                            <div className="overview-card-title">
                                <div className="overview-icon">
                                    <i className='bx bx-user' style={{ fontSize: '20px', color: '#2196F3' }}></i>
                                </div>
                                <h3>Total Users</h3>
                            </div>
                            <p>7</p>
                        </div>

                        <div className="overview-card">
                            <div className="overview-card-title">
                                <div className="overview-icon">
                                    <i className='bx bx-box' style={{ fontSize: '20px', color: '#FF9800' }}></i>
                                </div>
                                <h3>Total Products</h3>
                            </div>
                            <p>10</p>
                        </div>

                        <div className="overview-card">
                            <div className="overview-card-title">
                                <div className="overview-icon">
                                    <i className='bx bx-dollar' style={{ fontSize: '20px', color: '#8BC34A' }}></i>
                                </div>
                                <h3>Revenue</h3>
                            </div>
                            <p>
                                ₹ {orders
                                    .reduce((sum, order) => sum + order.totalPrice, 0)
                                    .toLocaleString()}
                            </p>
                        </div>
                    </div>

                    {/* Recent Orders Table */}
                    <div className="admin-table">
                        <h2>Recent Orders</h2>
                        {loading ? (
                            <p>Loading orders...</p>
                        ) : (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Amount</th>
                                        <th>Address</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.length > 0 ? (
                                        orders.map((order) => (
                                            <tr key={order.id}>
                                                <td>#{order.id}</td>
                                                <td>{order.customerName}</td>
                                                <td>₹{order.totalPrice.toLocaleString()}</td>
                                                <td>{order.address}</td>
                                                <td className={`status ${order.status.toLowerCase()}`}>
                                                    {order.status}
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4">No orders available</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Admin;