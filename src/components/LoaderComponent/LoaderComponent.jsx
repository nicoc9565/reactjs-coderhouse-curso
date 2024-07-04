import React from "react";
import {cardio} from "ldrs";

const LoderComponent = () => {
  cardio.register();

  return (
    <div className="loader">
      <l-cardio size="150" stroke="10" speed="2" color="white"></l-cardio>;
    </div>
  );
};

export default LoderComponent;
