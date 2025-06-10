// admin/Dashboard.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch products and orders from API
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
    
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="admin-dashboard">
      <h1>Rx Cart Admin</h1>
      <div className="admin-sections">
        <div className="admin-card" onClick={() => navigate('/admin/products')}>
          <h3>Products</h3>
          <p>{products.length} items</p>
        </div>
        <div className="admin-card" onClick={() => navigate('/admin/orders')}>
          <h3>Orders</h3>
          <p>{orders.length} orders</p>
        </div>
        <div className="admin-card" onClick={() => navigate('/admin/seo')}>
          <h3>SEO Tools</h3>
          <p>Optimize visibility</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
