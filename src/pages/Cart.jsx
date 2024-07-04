import React from "react";
import {CartContext} from "../context/CartContext";

const Cart = () => {
  const {cart, removeFromCart, deleteFromCart} = React.useContext(CartContext);

  const handleRemoveOne = (item) => {
    removeFromCart(item, 1);
  };

  const handleDeleteItem = (item) => {
    deleteFromCart(item);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length > 0 ? (
        <div style={{display: "flex"}}>
          <div style={{flex: 1, padding: "10px"}}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{
                  margin: "10px",
                  border: "1px solid gray",
                  padding: "10px",
                }}
              >
                <h3>{item.title}</h3>
                <img src={item.thumbnail} alt="imag" style={{width: 300}} />
                <p>{item.description}</p>
                <p>Precio unitario: ${item.price}</p>
                <p>Cantidad: {item.quantity}</p>
                <button
                  onClick={() => handleRemoveOne(item)}
                  style={{padding: 5}}
                >
                  Eliminar 1
                </button>
                <button
                  onClick={() => handleDeleteItem(item)}
                  style={{padding: 5}}
                >
                  Eliminar todo
                </button>
              </div>
            ))}
          </div>
          <div style={{flex: 1, padding: "10px"}}>
            {cart.map((item, index) => (
              <div
                key={index}
                style={{margin: "10px", padding: "10px", textAlign: "right"}}
              >
                <p style={{background: "green", padding: "10px"}}>
                  Total: ${item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Tu carrito está vacío</p>
      )}
    </div>
  );
};

export default Cart;
