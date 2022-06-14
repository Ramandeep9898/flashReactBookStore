import "./App.css";
import "./style/style.css";
import Home from "./pages/Home";
import ProductListingMain from "./components/ProductListMain.component/ProductListMain";
import ProductDetailMain from "./components/ProductCard.Component/ProductDetailsMain.Component/ProductDetailMain";
import LoginMain from "./pages/LoginMain";
import SignupMain from "./pages/SignupMain";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
// import MockmanEs from "mockman-js";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListingPage" element={<ProductListingMain />} />
        <Route
          path="/productListingPage/:productID"
          element={<ProductDetailMain />}
        />
        <Route path="/login" element={<LoginMain />} />
        <Route path="/signup" element={<SignupMain />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
