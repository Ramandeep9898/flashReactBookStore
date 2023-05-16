import { useCart } from "../../contexts/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useWishList } from "../../contexts/useWishlist";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import "./cart.css";
import { useState } from "react";
import { HiStar } from "react-icons/hi";

export const CartCard = () => {
  const { user } = useAuth();
  const { addToWishList } = useWishList();

  const { cart, removeFromCart } = useCart();

  return (
    <>
      <div className="flex vert-cards mgT-16">
        {cart.map((cartDetails, i) => {
          return (
            <>
              <div key={i} className="card-basic-updated card-vertical-updated">
                <img
                  src={cartDetails.img}
                  alt=""
                  className="avatar sq-avatar card-img img-container"
                />
                <div className=" card-typo card-typo-vertical w100">
                  <div className="">
                    <div className="card-updated capitalize fW-500 color text-left ">
                      {cartDetails.title}
                    </div>
                    <div className="card-subtitle capitalize fW-500 color text-left mgT-4">
                      Author: {cartDetails.author}
                    </div>
                    <div className="rating-div mgT-16">
                      <span className="badge badge-red ">
                        Few pieces left!{" "}
                      </span>
                      <span className="badge badge-green">
                        {cartDetails.rating}
                        <HiStar />
                      </span>
                    </div>
                  </div>

                  <div className="card capitalize fW-500 color text-left mgT-8 flex-row">
                    &#8377; {cartDetails.discountedPrice}
                  </div>

                  <Quantity id={cartDetails._id} />

                  <div className="flex-row mgT-8">
                    {/* <button
                    className="btn solid-pri-btn  mg-top8 gray-btn"
                    onClick={() =>
                      removeFromCart(cartDetails._id) &&
                      addToWishList(cartDetails)
                    }
                  >
                    Move to Whishlist <AiOutlineHeart />
                  </button> */}

                    <button
                      className=" delete-btn cursor"
                      onClick={() => removeFromCart(cartDetails._id)}
                    >
                      <svg
                        className="w-5 h-5 delete-btn"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hr-divider"></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export const Quantity = ({ id }) => {
  const { updateCartItemQuantity, removeFromCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    console.log(quantity);
    // quantity === 0 ? removeFromCart(id) : "";
    setQuantity((prev) => prev - 1);
  };
  return (
    <>
      <div className="card capitalize fW-500 color text-left mgT-8 flex-row align-center">
        <button
          className="quantity-btn"
          onClick={() => {
            decrementQuantity();
            updateCartItemQuantity(quantity);
          }}
          disabled={quantity <= 1 ? true : false}
        >
          <GrFormSubtract />
        </button>
        {quantity}
        <button
          className="quantity-btn"
          onClick={() => {
            incrementQuantity();
            updateCartItemQuantity(id, quantity);
          }}
        >
          <IoMdAdd />
        </button>
      </div>
    </>
  );
};
