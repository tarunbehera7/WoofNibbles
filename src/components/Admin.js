import React from "react";
import "../styles/Admin.css";
import Navbar from "./Navbar";

const Admin = () => {
    
    const firstName = localStorage.getItem("firstName") || "User";

    return (
        <>
        {<Navbar username={firstName}/>}
        <div className="admin-container">
            {/* Sidebar */}
            <aside className="admin-sidebar">
                <h2 className="admin-logo">Admin Panel</h2>
                <ul className="admin-menu">
                    <li className="active">Dashboard</li>
                    <li>Orders</li>
                    <li>Products</li>
                    <li>Users</li>
                    <li>Analytics</li>
                </ul>
            </aside>

            {/* Main Content */}
            <main className="admin-main">
                <h1 className="admin-title">Dashboard</h1>

                {/* Overview Cards */}
                <div className="admin-overview">
                    <div className="overview-card">
                        <h3>Total Orders</h3>
                        <p>1,234</p>
                    </div>
                    <div className="overview-card">
                        <h3>Total Users</h3>
                        <p>5,678</p>
                    </div>
                    <div className="overview-card">
                        <h3>Total Products</h3>
                        <p>345</p>
                    </div>
                    <div className="overview-card">
                        <h3>Revenue</h3>
                        <p>₹12,34,567</p>
                    </div>
                </div>

                {/* Recent Orders Table */}
                <div className="admin-table">
                    <h2>Recent Orders</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Customer</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>#00123</td>
                                <td>Aryan Kumar</td>
                                <td>₹5,000</td>
                                <td className="status pending">Pending</td>
                            </tr>
                            <tr>
                                <td>#00124</td>
                                <td>Neha Singh</td>
                                <td>₹2,800</td>
                                <td className="status delivered">Delivered</td>
                            </tr>
                            <tr>
                                <td>#00125</td>
                                <td>Rahul Sharma</td>
                                <td>₹1,500</td>
                                <td className="status shipped">Shipped</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
        </>

    );
};

export default Admin;