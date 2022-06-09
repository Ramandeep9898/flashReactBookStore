import React from "react";
import Aside from "../Aside.component/Aside";
import ProductCard from "../ProductCard.Component/ProductCard";
import Header from "../Header.component/Header";

const ProductListingMain = () => {
  return (
    <main className="product-page">
      {/* <Header /> */}
      <Aside />
      <ProductCard />
    </main>
  );
};

export default ProductListingMain;
