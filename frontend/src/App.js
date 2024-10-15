// src/App.js

import React from "react";
import ProductList from "./components/ProductList";
import ProductAdd from "./components/ProductAdd";


import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Django and React Integration</h1>
      <ProductList />
      <ProductAdd />
    </div>
  );
}

export default App;
