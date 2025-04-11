import React from "react";
import ViewProductButton from "../components/button"; // Adjust the path as needed
import "./productcard.css"; // Optional: include your CSS file

// Array of example products
const productExamples = [
  {
    productImage: "https://via.placeholder.com/200",
    productName: "Awesome Product",
    productPrice: "$199.99",
  },
  {
    productImage: "https://via.placeholder.com/200",
    productName: "Amazing Gadget",
    productPrice: "$249.99",
  },
  {
    productImage: "https://via.placeholder.com/200",
    productName: "Cool Device",
    productPrice: "$299.99",
  },
];

const Productcard = () => {
  return (
    <div className="product-list">
      {productExamples.map((product, index) => (
        <div key={index} className="product-card">
          <img
            src={product.productImage}
            alt={product.productName}
            className="product-image"
          />
          <h2 className="product-name">{product.productName}</h2>
          <p className="product-price">{product.productPrice}</p>
          <ViewProductButton />
        </div>
      ))}
    </div>
  );
};

export default Productcard;