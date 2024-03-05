import React, { useState } from 'react';
import './App.css';
import img from "./assets/a1.jpg";
import img1 from "./assets/a2.jpg";
import img2 from "./assets/a3.jpg";


// Sample product data
const products = [
  { 
    id: 1, 
    name: 'MORE TO THE STORY', 
    author: 'HENA KHAN', 
    price: 10, 
    image: img,
  },
  { 
    id: 2, 
    name: 'MAGICAL STORIES', 
    author: 'ROBERT CRUISE', 
    price: 15, 
    image: img1,
  },
  { 
    id: 3, 
    name: 'ONCE UPON A TIME', 
    author: 'STUART GIBBS', 
    price: 20, 
    image: img2, 
  }
];
function App() {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCart([...cart, { ...product }]);
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      <h1>Shopping Cart</h1>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Author: {product.author}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Cart</h2>
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Author: {item.author}</p>
            <p>${item.price}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))}
        <div className="total-price">
          <h3>Total Price: ${totalPrice}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
