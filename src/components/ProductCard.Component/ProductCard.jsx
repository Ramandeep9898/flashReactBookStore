import react from "react";
import "./productCard.css";
import { Link } from "react-router-dom";

// hooks
import { useData } from "../../customHooks/useData";

// context
import { useProduct } from "./productContext";

// fliters
import getSortedProducts from "../Aside.component/fliters/getSortedProducts";
import { getDiscountedProducts } from "../Aside.component/fliters/getDiscountedProducts";
import { getFliteredProducts } from "../Aside.component/fliters/getFlitedproducts";

import { addCartWishList } from "../../utils/cart/addCartWhishlist";
import ProductCard from "./Products";

const Products = () => {
  const { state } = useProduct();
  const { productData, categoryData } = useData();
  const categoryProducts = getFliteredProducts(
    productData,
    state.categories.bestseller,
    state.categories.fiction,
    state.categories.nonfiction,
    state.categories.horror
  );

  const discountedProducts = getDiscountedProducts(
    categoryProducts,
    state.discount
  );

  const sortProducts = getSortedProducts(discountedProducts, state.sortBy);
  return (
    <main className="product-page-main">
      <div className="product-page-main-heading mgT-20">
        <p className="h5 color capitalize fW-600">showing the products</p>
        <span className="h6">(showing {sortProducts.length} products)</span>
      </div>
      <div className="product-cards">
        {sortProducts &&
          sortProducts.map((product) => {
            let productCardData = {
              _id: product._id,
              title: product.title,
              img: product.img,
              originalPrice: product.originalPrice,
              author: product.author,
              author: product.author,
              cover: product.cover,
              discount: product.discount,
            };
            return (
              <ProductCard
                key={product._id}
                productCardData={productCardData}
                product={product}
                addCartWishList={addCartWishList}
              />
            );
          })}
      </div>
    </main>
  );
};
export default Products;
