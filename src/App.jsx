import React from "react";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import ItemListContainerComponent from "./components/ItemListContainerComponent/ItemListContainerComponent";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <NavBarComponent />
      <ItemListContainerComponent greeting="Bienvenidos a Té Acompaño Blends" />
    </>
  );
};

export default App;
