import react from "react";
import "./product-details.css";

const ProductDetails = ({
  _id,
  title,
  img,
  originalPrice,
  discountedPrice,
  author,
  rating,
  cover,
  discount,
}) => {
  return (
    <>
      <div className="grid-container two-item-grid">
        <div className="grid-cell">
          <div className="display-play-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="grid-cell">
          <div className="h1 color mgT-8 ">{title}</div>
          <div className="h3 gray-color mgT-8">-by {author}</div>
          <div className="rating-div mgT-8">
            <span className="rating sizing"> {rating} &#9733;</span>
            <span className="cover">{cover}</span>
          </div>

          <div className="mgT-8 h3">
            &#8377;{discountedPrice}
            <span className="original-price h5"> &#8377;{originalPrice} </span>
            &nbsp;
            <span className="discount h5"> {discount}%Off </span>
          </div>
          <button className="btn solid-pri-btn width80 mgT-16">
            add to bag
          </button>
          <button className="btn btn-pri-outlined width80 mgT-16">
            favourite &#10084;
          </button>
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
