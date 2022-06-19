import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./components/ProductCard.Component/productContext";
import { CartWishlistContextProvider } from "./contexts/contextCartWhishlist";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartWishlistContextProvider>
        <ProductProvider>
          <App />
        </ProductProvider>
      </CartWishlistContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
