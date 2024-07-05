import React from "react";
import {CartContext} from "../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const {cart, removeFromCart, deleteFromCart} = React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  // Calcular el total del carrito
  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div className="cart-content">
          <div className="cart-items">
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.thumbnail} alt="imag" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <p className="span">Precio unitario: ${item.price}</p>
                  <p className="span">Cantidad: {item.quantity}</p>
                  <div className="cart-item-buttons">
                    <button onClick={() => handleRemoveOne(item)}>
                      Eliminar 1
                    </button>
                    <button onClick={() => handleDeleteItem(item)}>
                      Eliminar todo
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <div className="cart-summary-item">
              <p>Total: ${totalAmount.toFixed(2)}</p>
            </div>
          </div>
        </div>
      ) : (
        <p style={{color: "#000", fontSize: "1.2rem"}}>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
