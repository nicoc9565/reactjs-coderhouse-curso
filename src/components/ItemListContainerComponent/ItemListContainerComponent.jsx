import React from "react";
import "./ItemListContainerComponent.css";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";

const ItemListContainerComponent = ({products}) => {
  return (
    <div className="itemListContainer">
      {products.map((product) => (
        <Card key={product.id} className="custom-card">
          <Card.Img
            variant="top"
            src={product.thumbnail}
            className="card-img-top"
          />
          <Card.Body>
            <Card.Title
              style={{
                fontWeight: "bold",
                textAlign: "center",
                fontSize: "1.5rem",
              }}
            >
              {product.title}
            </Card.Title>
            <Card.Text style={{textAlign: "justify", fontSize: "1rem"}}>
              {product.description}
            </Card.Text>
          </Card.Body>
          <Link
            to={`/item/${product.id}`}
            className="card-link"
            style={{fontSize: "1.2rem"}}
          >
            Ir a detalle
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ItemListContainerComponent;
