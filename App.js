// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from './components/Header';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import Cart from './pages/Cart';
import AdminDashboard from './admin/Dashboard';
import ProductManagement from './admin/ProductManagement';
import OrderManagement from './admin/OrderManagement';
import SEOTools from './admin/SEOTools';
import './styles/main.css';

// Mock data - replace with API calls in production
const mockProducts = [
  { id: 1, title: 'Prescription Glasses', price: 129.99, image: '/images/glasses.jpg', description: 'High-quality prescription glasses with anti-reflective coating', category: 'eyewear' },
  { id: 2, title: 'Contact Lens Solution', price: 14.99, image: '/images/solution.jpg', description: 'Multi-purpose solution for all contact lens types', category: 'accessories' }
];

function App() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState(mockProducts);
  const [orders, setOrders] = useState([]);
  
  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCart(cart.map(item =>
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  // Admin functions
  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts(products.map(product =>
      product.id === updatedProduct.id ? updatedProduct : product
    ));
  };

  return (
    <Router>
      <Helmet>
        <title>Rx Cart - Your Online Pharmacy</title>
        <meta name="description" content="Rx Cart offers quality pharmaceutical products with fast delivery and great prices." />
        <meta name="keywords" content="pharmacy, medicine, health, wellness, prescriptions" />
      </Helmet>
      
      <Header cartCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={
            <Home 
              products={products} 
              addToCart={addToCart} 
            />} 
          />
          <Route path="/product/:id" element={
            <ProductPage 
              products={products} 
              addToCart={addToCart} 
            />} 
          />
          <Route path="/cart" element={
            <Cart 
              cartItems={cart} 
              removeFromCart={removeFromCart}
              updateQuantity={updateQuantity}
            />} 
          />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/products" element={
            <ProductManagement 
              products={products} 
              addProduct={addProduct}
              updateProduct={updateProduct}
            />} 
          />
          <Route path="/admin/orders" element={<OrderManagement orders={orders} />} />
          <Route path="/admin/seo" element={<SEOTools products={products} />} />
        </Routes>
      </main>
      
      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Rx Cart. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
