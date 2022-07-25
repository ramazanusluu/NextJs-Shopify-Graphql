import React from "react";

function ProductsDetails({ product }) {
  return (
    <div>
      <h1>{product.product.title}</h1>
      <h1>{product.product.description}</h1>
    </div>
  );
}

export default ProductsDetails;
