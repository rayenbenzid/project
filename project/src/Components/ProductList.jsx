import React, { useState } from "react";
import Card from "./Card";

const ProductList = ({ search,product }) => {

  return (
    <div className="list">
      {product
        .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
        .map((el) => (
          <Card el={el} />
        ))}
    </div>
  );
};

export default ProductList;