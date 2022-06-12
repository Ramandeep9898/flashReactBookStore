import "./App.css";
import "./style/style.css";
// import Header from "./components/Header.component/Header.jsx";
import Home from "./pages/Home";
import ProductListingMain from "./components/ProductListMain.component/ProductListMain";
import ProductDetailMain from "./components/ProductCard.Component/ProductDetailsMain.Component/ProductDetailMain";
// import Aside from "./components/Aside.component/Aside";
// import ProductCard from "./components/ProductCard.Component/ProductCard";
// import Login from "./pages/Login";
// import ProductListing from "./pages/ProductListing";
// import { SignUp } from "./pages/SignUp";
// import Cart from "./pages/Cart";
// import Wishlist from "./pages/Wishlist";
import { Routes, Route } from "react-router-dom";
import MockmanEs from "mockman-js";

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
        {/* <Route path="/" element={<Aside />} /> */}
        {/* <Route path="/" element={<ProductCard />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<SignUp />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/products" element={<ProductListing />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
        {/* <Route path="/mockman" element={<MockmanEs />} /> */}
      </Routes>
    </div>
  );
}

export default App;
