import "./App.css";
import "./style/style.css";
import Home from "./pages/Home";
import ProductListingMain from "./components/ProductListMain.component/ProductListMain";
import ProductDetailMain from "./components/ProductCard.Component/ProductDetailsMain.Component/ProductDetailMain";
import LoginMain from "./pages/LoginMain";
import SignupMain from "./pages/SignupMain";
import Wishlist from "./pages/Wishlist";
import { Auth } from "./components/Auth.Component/Auth";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/Private.Routes/PrivateRoutes";
import { RestrictedRoute } from "./components/Restricted.Routes/RestrictedRoutes";
import User from "./components/Auth.Component/User";
// import MockAPI from "../Mockman";
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
        <Route path="/cart" element={<Cart />} />
        <Route element={<PrivateRoute />}>
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
