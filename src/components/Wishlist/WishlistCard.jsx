import { Link } from "react-router-dom";
import "./whishlist.css";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useWishList } from "../../contexts/useWishlist";
import { useCart } from "../../contexts/useCart";
import { useData } from "../../customHooks/useData";

export const WishlistCard = ({ wishlistCardDetail }) => {
  const { productData } = useData();
  console.log(productData._id, wishlistCardDetail._id);
  const { wishList, addToWishList, removeFromWishList } = useWishList();
  const { cart, addToCart } = useCart();

  const isProductInCart = cart?.some(
    (item) => item._id === wishlistCardDetail._id
  )
    ? true
    : false;

  return (
    <div key={wishlistCardDetail._id} className="card-basic">
      <button
        className="Floating-btn postion"
        onClick={() => {
          removeFromWishList(wishlistCardDetail);
        }}
      >
        <AiFillHeart />
      </button>
      <img
        src={wishlistCardDetail.img}
        alt=""
        className="avatar sq-avatar card-img"
      />
      <div className="card-typo">
        <Link to={`/productListingPage/${wishlistCardDetail._id}`}>
          <div className="card capitalize fW-400 color text-left">
            {wishlistCardDetail.title}
          </div>
        </Link>
        <div className="card-subtitle capitalize fW-400 color text-left mgT-4">
          -by {wishlistCardDetail.author}
        </div>
        <div className="card capitalize fW-500 color text-left mgT-4">
          <div className="rating-div">
            <span className="rating">{wishlistCardDetail.rating}&#9733;</span>
            <span className="cover">( {wishlistCardDetail.cover} )</span>
          </div>

          <div className="mgT-4">
            &#8377;{wishlistCardDetail.discountedPrice}
            <span className="original-price">
              {" "}
              &#8377;{wishlistCardDetail.originalPrice}
            </span>
            &nbsp;
            <span className="discount">{wishlistCardDetail.discount}%</span>
          </div>
        </div>
        <button
          className="btn solid-pri-btn width100 mg-top8"
          onClick={() => {
            addToCart(wishlistCardDetail);
          }}
        >
          {isProductInCart ? "Go to Cart" : "add to cart"}
        </button>
      </div>
    </div>
  );
};
