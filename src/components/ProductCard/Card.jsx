import "./productCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useData } from "../../customHooks/useData";
import { useProduct } from "./productContext";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { useAuth } from "../../customHooks/useAuth";
import { useWishList } from "../../contexts/useWishlist";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import getSortedProducts from "../Aside/fliters/getSortedProducts";
import { getDiscountedProducts } from "../Aside/fliters/getDiscountedProducts";
import { getFliteredProducts } from "../Aside/fliters/getFlitedproducts";
import { useState } from "react";

export const Card = ({ productDetails, sortProduct }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const pathName = useLocation();
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const { cart, addToCart } = useCart();

  const isProductInWishList = wishList.some(
    (item) => item._id === productDetails._id
  )
    ? true
    : false;
  const isProductInCart = cart?.some((item) => item._id === productDetails._id)
    ? true
    : false;

  return (
    <>
      <div key={productDetails._id} className="card-basic">
        <button
          className="Floating-btn postion"
          onClick={() => {
            if (!user) {
              navigate("/auth", {
                state: { from: pathName },
                replace: true,
              });
            } else if (isProductInWishList) {
              removeFromWishList(productDetails);
            } else {
              addToWishList(productDetails);
            }
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
            {isProductInCart ? "Go to Cart" : "add to cart"}
          </button>
        </div>
      </div>
    </>
  );
};
