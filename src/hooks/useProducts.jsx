import React from "react";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  React.useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return {products};
};
