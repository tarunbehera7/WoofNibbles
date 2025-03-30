// import React from "react";
// import "../styles/Admin.css";
// import Navbar from "./Navbar";

// const Admin = () => {
    
//     const firstName = localStorage.getItem("firstName") || "User";

//     return (
//         <>
//         {<Navbar username={firstName}/>}
//         <div className="admin-container">
//             {/* Sidebar */}
//             <aside className="admin-sidebar">
//                 <h2 className="admin-logo">Admin Panel</h2>
//                 <ul className="admin-menu">
//                     <li className="active">Dashboard</li>
//                     <li>Orders</li>
//                     <li>Products</li>
//                     <li>Users</li>
//                     <li>Analytics</li>
//                 </ul>
//             </aside>

//             {/* Main Content */}
//             <main className="admin-main">
//                 <h1 className="admin-title">Dashboard</h1>

//                 {/* Overview Cards */}
//                 <div className="admin-overview">
//                     <div className="overview-card">
//                         <h3>Total Orders</h3>
//                         <p>34</p>
//                     </div>
//                     <div className="overview-card">
//                         <h3>Total Users</h3>
//                         <p>58</p>
//                     </div>
//                     <div className="overview-card">
//                         <h3>Total Products</h3>
//                         <p>20</p>
//                     </div>
//                     <div className="overview-card">
//                         <h3>Revenue</h3>
//                         <p>₹34,567</p>
//                     </div>
//                 </div>

//                 {/* Recent Orders Table */}
//                 <div className="admin-table">
//                     <h2>Recent Orders</h2>
//                     <table>
//                         <thead>
//                             <tr>
//                                 <th>Order ID</th>
//                                 <th>Customer</th>
//                                 <th>Amount</th>
//                                 <th>Status</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>#00123</td>
//                                 <td>Aryan Kumar</td>
//                                 <td>₹5,000</td>
//                                 <td className="status pending">Pending</td>
//                             </tr>
//                             <tr>
//                                 <td>#00124</td>
//                                 <td>Neha Singh</td>
//                                 <td>₹2,800</td>
//                                 <td className="status delivered">Delivered</td>
//                             </tr>
//                             <tr>
//                                 <td>#00125</td>
//                                 <td>Rahul Sharma</td>
//                                 <td>₹1,500</td>
//                                 <td className="status shipped">Shipped</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             </main>
//         </div>
//         </>

//     );
// };

// export default Admin;




import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import Navbar from "./Navbar";
import axios from "axios";

const Admin = () => {

    const firstName = localStorage.getItem("firstName") || "User";
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    
    // Fetch orders when the component mounts
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
    }, []); // Empty dependency array means it runs once on mount

    return (
        <>
            <Navbar username={firstName} />
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

                    {/* Overview Cards (Static for simplicity) */}
                    <div className="admin-overview">
                        <div className="overview-card">
                            <h3>Total Orders</h3>
                            <p>{orders.length}</p> {/* Dynamically show total orders */}
                        </div>
                        <div className="overview-card">
                            <h3>Total Users</h3>
                            <p>8</p>
                        </div>
                        <div className="overview-card">
                            <h3>Total Products</h3>
                            <p>10</p>
                        </div>
                        <div className="overview-card">
                            <h3>Revenue</h3>
                            <p>
                                ₹
                                {orders
                                    .reduce((sum, order) => sum + order.totalPrice, 0)
                                    .toLocaleString()}
                            </p> {/* Dynamically calculate revenue */}
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
        </>
    );
};

export default Admin;