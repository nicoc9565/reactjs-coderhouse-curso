import React from "react";

import "./ItemListContainerComponent.css";

const ItemListContainerComponent = ({greeting}) => {
  return <div className="itemListContainer">{greeting}</div>;
};

export default ItemListContainerComponent;
