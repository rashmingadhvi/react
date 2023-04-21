import React from "react";
import {render} from "react-dom";
import Products from "./products";
import { Router } from "@reach/router";
import ProductDetails from "./productdetails";

const App = () => {
  return (
    <React.StrictMode>
      <h1> Sample React App</h1>
      
      <Router onChange={(e) => console.log(e)}>
        <Products path="/" />
        <ProductDetails path="/details/:id" />
      </Router>
    </React.StrictMode>
  );
};


render(<App />, document.getElementById("root"));

export default App;
