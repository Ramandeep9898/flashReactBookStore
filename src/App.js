import "./App.css";
import "./style/style.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import ProductListingMain from "./components/ProductListMain/ProductListMain";
import ProductDetailMain from "./components/ProductDetails/ProductDetailMain";
import Wishlist from "./pages/Wishlist";
import { Auth } from "./components/Auth/Auth";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Private.Routes/PrivateRoutes";
import { RestrictedRoute } from "./components/Restricted.Routes/RestrictedRoutes";
import User from "./components/Auth/User";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productListingPage" element={<ProductListingMain />} />
        <Route
          path="/productListingPage/:productID"
          element={<ProductDetailMain />}
        />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/user" element={<User />} />
        </Route>

        <Route element={<RestrictedRoute />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
