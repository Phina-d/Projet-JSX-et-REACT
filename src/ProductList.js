import React from "react";
import product from "./product";
import VariantCard from "./VariantCard";

const ProductList = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {product.variants.map((variant, index) => (
          <VariantCard key={index} variant={variant} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
