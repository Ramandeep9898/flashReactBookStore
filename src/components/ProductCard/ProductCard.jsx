import "./productCard.css";
import { useData } from "../../customHooks/useData";
import { useProduct } from "./productContext";
import getSortedProducts from "../Aside/fliters/getSortedProducts";
import { getDiscountedProducts } from "../Aside/fliters/getDiscountedProducts";
import { getFliteredProducts } from "../Aside/fliters/getFlitedproducts";
import { Card } from "./Card";

const Products = () => {
  const { state } = useProduct();
  const { productData } = useData();

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
          sortProducts.map((productDetails) => (
            <Card productDetails={productDetails} sortProduct={sortProducts} />
          ))}
      </div>
    </main>
  );
};
export default Products;
