import React from "react";
import Aside from "../Aside.component/Aside";
import ProductCard from "../ProductCard.Component/ProductCard";
import Header from "../Header.component/Header";
import "./product-list-main.css";

const ProductListingMain = () => {
  return (
    <main className="product-page">
      <Header />
      <div className="product-list-main">
        <Aside />
        <ProductCard />
      </div>
    </main>
  );
};

export default ProductListingMain;
