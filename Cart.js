// utils/cart.js
export const addToCart = (cart, setCart, product) => {
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

export const removeFromCart = (cart, setCart, productId) => {
  setCart(cart.filter(item => item.id !== productId));
};

export const updateQuantity = (cart, setCart, productId, newQuantity) => {
  if (newQuantity < 1) return;
  
  setCart(cart.map(item =>
    item.id === productId 
      ? { ...item, quantity: newQuantity } 
      : item
  ));
};

export const calculateTotal = (cart) => {
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};
