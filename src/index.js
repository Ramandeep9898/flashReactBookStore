import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./components/ProductCard.Component/productContext";
import { AuthProvider } from "./customHooks/useAuth";
import { CartProvider } from "./contexts/useCart";
import { WishListProvider } from "./contexts/useWishlist";
import { ToastProvider } from "./contexts/useToast";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ToastProvider>
          <CartProvider>
            <WishListProvider>
              <ProductProvider>
                <App />
              </ProductProvider>
            </WishListProvider>
          </CartProvider>
        </ToastProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
