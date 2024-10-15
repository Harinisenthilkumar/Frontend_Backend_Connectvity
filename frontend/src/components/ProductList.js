import React, { useEffect, useState } from "react";
import axios from "axios";


const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/product/")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the products!", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Products</h2>
      {products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.Brand_name}</strong> {product.Model_name} - $
              {product.Price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;
