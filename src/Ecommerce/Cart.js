import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    calculateTotalPrice,
    calculateCartTotal,
  } = useContext(CartContext);

  const handleUpdateQuantity = (productId, newQuantity) => {
    updateQuantity(productId, newQuantity);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((product) => (
        <div key={product.id}>
          <p>
            {product.title} - ${product.price} - Quantity: {product.quantity} - Total: ${calculateTotalPrice(product)}
            <Button variant="primary" size="sm" onClick={() => handleUpdateQuantity(product.id, product.quantity + 1)}>
              +
            </Button>
            <Button variant="primary" size="sm" onClick={() => handleUpdateQuantity(product.id, product.quantity - 1)}>
              -
            </Button>
            <Button variant="danger" size="sm" onClick={() => removeFromCart(product.id)}>
              Remove
            </Button>
          </p>
        </div>
      ))}
      <p>Total Cost: ${calculateCartTotal()}</p>
      <Button>Buy Now</Button><br/><br/>
      <Link to="/">
        <Button className="back-to-home">Back to Home</Button>
      </Link>
    </div>
  );
}

export default Cart;
