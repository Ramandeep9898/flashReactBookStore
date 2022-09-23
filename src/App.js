import "./App.css";
import "./style/style.css";
import Header from "./components/Header.component/Header";
import Footer from "./components/HomePage.component/Home.Component/Footer.Component/Footer";
import Home from "./pages/Home";
import ProductListingMain from "./components/ProductListMain.component/ProductListMain";
import ProductDetailMain from "./components/ProductCard.Component/ProductDetailsMain.Component/ProductDetailMain";
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
      <Header />
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
      <Footer />
    </div>
  );
}

export default App;
