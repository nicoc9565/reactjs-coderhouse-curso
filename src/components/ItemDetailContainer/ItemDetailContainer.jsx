import React from "react";
import "./ItemDetailContainer.css";

const ItemDetailContainer = ({product}) => {
  return (
    <div className="itemDetailContainer">
      <div>
        {product.images ? (
          product.images.map((image, index) => {
            return (
              <img
                key={index}
                src={image}
                alt={product.title}
                style={{width: "20rem"}}
              />
            );
          })
        ) : (
          <img
            src={product.thumbnail}
            alt={product.title}
            style={{width: "20rem"}}
          />
        )}
      </div>
      <div>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
