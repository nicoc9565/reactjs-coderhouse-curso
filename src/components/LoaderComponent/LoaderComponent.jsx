import React from "react";
import {cardio} from "ldrs";

import "./LoderComponent.css";

const LoderComponent = () => {
  cardio.register();

  return (
    <div className="loader">
      <l-cardio
        className="loader-loader"
        size="150"
        stroke="10"
        speed="2"
        color="#363c2b"
      ></l-cardio>
      ;
    </div>
  );
};

export default LoderComponent;
