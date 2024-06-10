import React from "react";

import "./ItemListContainerComponent.css";
import {useProducts} from "../../hooks/useProducts";

const ItemListContainerComponent = ({greeting}) => {
  const {products} = useProducts();

  return <div className="itemListContainer">{greeting}</div>;
};

export default ItemListContainerComponent;
