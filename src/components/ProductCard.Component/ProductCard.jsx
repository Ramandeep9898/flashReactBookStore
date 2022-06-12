import react from "react";
import "./productCard.css";
import { useData } from "../../customHooks/useData";
import { useProduct } from "./productContext";
import { Link } from "react-router-dom";

import getSortedProducts from "../Aside.component/fliters/getSortedProducts";
import { getDiscountedProducts } from "../Aside.component/fliters/getDiscountedProducts";
import { getFliteredProducts } from "../Aside.component/fliters/getFlitedproducts";

const Products = () => {
  const { state } = useProduct();
  const { productData, categoryData } = useData();
  // console.log(productData);
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
          sortProducts.map(
            ({
              _id,
              title,
              img,
              originalPrice,
              discountedPrice,
              author,
              rating,
              cover,
              discount,
            }) => (
              <div key={_id} className="card-basic">
                <button className="Floating-btn postion">
                  <i className="far fa-heart fa-lg"></i>
                </button>
                <img src={img} alt="" className="avatar sq-avatar card-img" />
                <div className="card-typo">
                  <Link to={`/productListingPage/${_id}`}>
                    <div className="card capitalize fW-400 color text-left">
                      {title}
                    </div>
                  </Link>
                  <div className="card-subtitle capitalize fW-400 color text-left mgT-4">
                    -by {author}
                  </div>
                  <div className="card capitalize fW-500 color text-left mgT-4">
                    <div className="rating-div">
                      <span className="rating">{rating}&#9733;</span>
                      <span className="cover">( {cover} )</span>
                    </div>

                    <div className="mgT-4">
                      &#8377;{discountedPrice}
                      <span className="original-price">
                        {" "}
                        &#8377;{originalPrice}
                      </span>
                      &nbsp;
                      <span className="discount">{discount}%</span>
                    </div>
                  </div>
                  <button className="btn solid-pri-btn width100 mg-top8">
                    add to cart
                  </button>
                </div>
              </div>
            )
          )}
      </div>
    </main>
  );
};
export default Products;
