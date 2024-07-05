import React from "react";
import {CartContext} from "../../context/CartContext";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({product}) => {
  const {addToCart, removeFromCart} = React.useContext(CartContext);
  const [quantity, setQuantity] = React.useState(0);

  const handleAdd = () => {
    setQuantity(quantity + 1);
    addToCart(product, 1);
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      removeFromCart(product, 1);
    }
  };

  return (
    <div className="item-detail-container">
      <div className="item-images">
        {product.images ? (
          product.images.map((image, index) => (
            <img key={index} src={image} alt={product.title} />
          ))
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            className="item-thumbnail"
          />
        )}
      </div>
      <div className="item-details">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>
          <span>Precio: ${product.price}</span>
        </p>
      </div>
      <div className="item-actions">
        <button onClick={handleAdd}>+</button>
        <span>{quantity}</span>
        <button onClick={handleRemove}>-</button>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
