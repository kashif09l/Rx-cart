// App.js (Main component)
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import AdminDashboard from './admin/Dashboard';

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>
      <Header cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cart} />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
