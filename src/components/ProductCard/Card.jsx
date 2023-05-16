import "./productCard.css";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/useCart";
import { useAuth } from "../../customHooks/useAuth";
import { useWishList } from "../../contexts/useWishlist";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { HiStar } from "react-icons/hi";

export const Card = ({ productDetails, sortProduct }) => {
  const { user, encodedToken } = useAuth();
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
      <div key={productDetails._id} className="card-basic card-basic-shadow">
        {/* add to wishlist  */}
        <button
          className="Floating-btn postion wishlist-btn"
          onClick={() => {
            if (!encodedToken) {
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
          {/* badge  */}
          <div className="rating-div">
            <span className="badge badge-green">
              {productDetails.rating}
              <HiStar />
            </span>
            <span className="badge badge-blue">{productDetails.cover} </span>
            <span className="badge badge-purple ">{productDetails.badge} </span>
          </div>

          {/* title  */}
          <Link to={`/productListingPage/${productDetails._id}`}>
            <div className="card capitalize fW-500 color text-left mgT-4">
              {productDetails.title}
            </div>
          </Link>

          {/* author  */}
          <div className="card-subtitle capitalize fW-500 color text-left ">
            Author: {productDetails.author}
          </div>

          {/* price  */}
          <div className="card  color text-left">
            <div className="mgT-4 fW-500">
              &#8377;{productDetails.discountedPrice}
              <span className="original-price  fW-500">
                &#8377;{productDetails.originalPrice}
              </span>
              &nbsp;
              <span className="discount text-red fW-500">
                ({productDetails.discount}% Off)
              </span>
            </div>
          </div>

          {/* add to cart  */}
          <button
            className="btn blue-btn width100 mg-top8 w400"
            onClick={() => {
              if (!encodedToken) {
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
            <FiShoppingBag />
          </button>
        </div>
      </div>
    </>
  );
};
