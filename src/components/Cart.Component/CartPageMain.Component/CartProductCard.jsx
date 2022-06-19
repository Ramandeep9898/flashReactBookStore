import react from "react";
import { useCartWishlistContext } from "../../../contexts/contextCartWhishlist";
const CartProductCard = ({ product }) => {
  const img = product.img;
  const title = product.title;
  const originalPrice = product.originalPrice;
  const discountedPrice = product.discountedPrice;
  const discount = product.discount;
  return (
    <>
      <div className="card-basic card-vertical vertical-card-height">
        <img src={img} alt="" className="avatar sq-avatar card-img" />

        <div className="card-typo vert-card-border">
          <div className="card capitalize fW-400 color text-left mgT-8">
            {title}
          </div>
          <div className="card-subtitle capitalize fW-400 color text-left mgT-4">
            women's shoes
          </div>
          <div className="card capitalize fW-500 color text-left mgT-8">
            &#8377;9000
          </div>
          <div className="h6 capitalize fW-500 color text-left mgT-8 quantity-container">
            quantity :
            <span className="quantity-decrease quantity-count fW-700">-</span>
            <div className="quantity">1</div>
            <span className="quantity-increase quantity-count">+</span>
          </div>

          <button className="btn btn-pri-outlined width100 mg-top16">
            remove from cart
          </button>
          <button className="btn solid-pri-btn width100 mg-top8">
            move to wishlist
          </button>
        </div>
      </div>
    </>
  );
};

export default CartProductCard;