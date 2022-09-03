import react from "react";
import { useCartWishlistContext } from "../../contexts/contextCartWhishlist";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({
  productCardData,
  product,
  addCartWishList,
  wishlist,
}) => {

  const {
    _id,
    title,
    img,
    originalPrice,
    discountedPrice,
    author,
    rating,
    cover,
    discount,
  } = productCardData;
  const { cartWishlistStateDispatch } = useCartWishlistContext();

  return (
    <div key={_id} className="card-basic">
      <button
        onClick={() => {
          addCartWishList(
            product,
            "ADD_TO_WISHLIST",
            cartWishlistStateDispatch
          );
        }}

        className="Floating-btn postion"
      >
        <i className="far fa-heart fa-lg"></i>
      </button>
      <img src={img} alt="" className="avatar sq-avatar card-img" />
      <div className="card-typo">
        <Link to={`/productListingPage/${_id}`}>
          <div className="card capitalize fW-400 color text-left">{title}</div>
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
            <span className="original-price"> &#8377;{originalPrice}</span>
            &nbsp;
            <span className="discount">{discount}%</span>
          </div>
        </div>
        <button
          className="btn solid-pri-btn width100 mg-top8"
          onClick={() => {
            console.log("cartWishlistStateDispatch",cartWishlistStateDispatch)
            console.log("product",product)
            addCartWishList(product, "CART", cartWishlistStateDispatch);
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
