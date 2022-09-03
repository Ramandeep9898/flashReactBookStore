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
import ProductCard from "./ProductCard";

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
  console.log("sortProducts", sortProducts);
  return (
    <main className="product-page-main">
      <div className="product-page-main-heading mgT-20">
        <p className="h5 color capitalize fW-600">showing the products</p>
        <span className="h6">(showing {sortProducts.length} products)</span>
      </div>
      <div className="product-cards">
        {sortProducts &&
          sortProducts.map((product) => (
            <ProductCard
              key={product._id}
              productCardData={product}
              product={product}
              addCartWishList={addCartWishList}
            />
          ))}
      </div>
    </main>
  );
};
export default Products;
