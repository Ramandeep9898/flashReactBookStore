import "./product-details.css";
import { HiStar } from "react-icons/hi";
import { FiShoppingBag } from "react-icons/fi";
import { AiOutlineHeart, AiOutlineCheckCircle } from "react-icons/ai";
import { useData } from "../../customHooks/useData";
import { Card } from "../ProductCard/Card";

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
  const { productData } = useData();
  const bookSortByAuthor = productData.filter(
    (item) => item.author == author && item._id != _id
  );
  console.log(bookSortByAuthor);

  return (
    <>
      <div className="grid-container two-item-grid">
        <div className="grid-cell">
          <div className="display-play-img gap-10">
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
        </div>
        <div className="grid-cell">
          <div className="rating-div mgT-8">
            <span className="badge badge-green">
              {rating} <HiStar />
            </span>
            <span className="badge badge-blue">{cover}</span>
            <span className="badge badge-purple ">bestseller</span>
            <span className="badge badge-red ">5 piece left </span>
          </div>

          <div className="h1 color fW-500">{title}</div>
          <div className="h4 gray-color">Author: {author}</div>

          <div className=" fW-500 h3">
            &#8377;{discountedPrice}{" "}
            <span className="original-price h5  fW-500">
              {" "}
              &#8377;{originalPrice}
            </span>
            &nbsp;
            <span className="discount h5 fW-500"> {discount}%Off </span>
            <div className="h5 green-color">inclusive of all taxes</div>
          </div>
          <div className="flex gap-10  mgT-8">
            <button className="btn black-btn fW-500">
              hardcover <AiOutlineCheckCircle />
            </button>
            <button className="btn black-btn-outlined   fW-500 ">
              softcover
            </button>
          </div>

          <div className="flex gap-10  mgT-8">
            <button className="btn solid-pri-btn fW-500 blue-btn big-btn">
              add to cart <FiShoppingBag />
            </button>
            <button className="btn btn-pri-outlined outline-blue big-btn fW-500 ">
              add to wishlist <AiOutlineHeart />
            </button>
          </div>

          <div className="divider-vertical mgT-16"></div>
          <div className="h3 color fW-500 mgT-16">Delivery Options </div>
          <input
            id="pincode"
            type="text"
            className="mgT-8 pincode-input"
            placeholder="Enter Pincode"
          />
          <button className="link">check</button>
          <div className="h6 gray-color mgT-4">
            Please enter PIN code to check delivery time & Pay on Delivery
            Availability
          </div>

          {/* <div className="h2 color fW-500 mgT-16">Description</div>
          <div className="h5 gray-color">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            deleniti porro magni perferendis provident? Hic esse explicabo ipsam
            nemo in eligendi, repellat tenetur, optio ut nihil recusandae.
            Earum, veritatis ab?
          </div> */}
        </div>
      </div>
      <div className="layout ">
        <div className="divider-vertical mgT-16"></div>
        <div className="h2 color fW-500 mgT-16">Other Books of {author}</div>
        <div className="mgT-20 authors-book-wrapper">
          {bookSortByAuthor.map((book) => {
            return <Card productDetails={book} />;
          })}
        </div>
      </div>
    </>
  );
};
export default ProductDetails;
