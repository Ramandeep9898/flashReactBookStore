import "./productCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../customHooks/useData";
import { useProduct } from "./productContext";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { useAuth } from "../../customHooks/useAuth";
import { useWishList } from "../../contexts/useWishlist";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import getSortedProducts from "../Aside.component/fliters/getSortedProducts";
import { getDiscountedProducts } from "../Aside.component/fliters/getDiscountedProducts";
import { getFliteredProducts } from "../Aside.component/fliters/getFlitedproducts";
import { useState } from "react";

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
          sortProducts.map((productDetails) => (
            <ProductCard
              productDetails={productDetails}
              sortProducts={sortProducts}
            />
          ))}
      </div>
    </main>
  );
};
export default Products;

export const ProductCard = ({ productDetails, sortProducts }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const pathName = useLocation();
  const { state } = useProduct();
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const { productData, categoryData } = useData();
  const { cart, addToCart } = useCart();
  const [productAdded, setProductAdded] = useState(false);

  const isProductInWishList = wishList.some(
    (item) => item._id === sortProducts._id
  )
    ? true
    : false;
  const isProductInCart = cart?.some((item) => item._id === sortProducts._id)
    ? true
    : false;

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
  let itemInCart;

  return (
    <>
      <div key={productDetails._id} className="card-basic">
        <button
          className="Floating-btn postion"
          onClick={() => {
            addToWishList(productDetails);
          }}
        >
          {isProductInWishList && user ? <AiFillHeart /> : <AiOutlineHeart />}
        </button>
        <img
          src={productDetails.img}
          alt=""
          className="avatar sq-avatar card-img"
        />
        <div className="card-typo">
          <Link to={`/productListingPage/${productDetails._id}`}>
            <div className="card capitalize fW-400 color text-left">
              {productDetails.title}
            </div>
          </Link>
          <div className="card-subtitle capitalize fW-400 color text-left mgT-4">
            -by {productDetails.author}
          </div>
          <div className="card capitalize fW-500 color text-left mgT-4">
            <div className="rating-div">
              <span className="rating">{productDetails.rating}&#9733;</span>
              <span className="cover">( {productDetails.cover} )</span>
            </div>

            <div className="mgT-4">
              &#8377;{productDetails.discountedPrice}
              <span className="original-price">
                {" "}
                &#8377;{productDetails.originalPrice}
              </span>
              &nbsp;
              <span className="discount">{productDetails.discount}%</span>
            </div>
          </div>
          <button
            className="btn solid-pri-btn width100 mg-top8"
            onClick={() => {
              if (!user) {
                navigate("/auth", {
                  state: { from: pathName },
                  replace: true,
                });
              } else if (isProductInCart) {
                navigate("/cart");
              } else {
                addToCart(productDetails);
              }
            }}
          >
            add to cart
          </button>
        </div>
      </div>
    </>
  );
};
