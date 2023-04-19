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
  console.log(cart);

  return (
    <>
      <div className="flex vert-cards mgT-16">
        {cart.map((cartDetails) => {
          return (
            <div class="card-basic-updated card-vertical-updated">
              <img
                src={cartDetails.img}
                alt=""
                class="avatar sq-avatar card-img img-container"
              />
              <div class="card-typo card-typo-vertical">
                <div className="rating-div">
                  <span className="badge badge-blue">original </span>
                  <span className="badge badge-purple ">bestseller </span>
                  <span className="badge badge-red ">Few pieces left! </span>
                </div>

                <div class="card-updated capitalize fW-500 color text-left mgT-8">
                  {cartDetails.title}
                </div>
                <div class="card-subtitle capitalize fW-500 color text-left mgT-4">
                  Author: {cartDetails.author}
                </div>

                <div class="card capitalize fW-500 color text-left mgT-8 flex-row">
                  &#8377; {cartDetails.discountedPrice}{" "}
                  <span className="badge badge-green">
                    {cartDetails.rating}
                    <HiStar />
                  </span>
                </div>

                <Quantity id={cartDetails._id} />

                <div className="flex-row mgT-8">
                  <button
                    class="btn solid-pri-btn  mg-top8 gray-btn"
                    onClick={() =>
                      removeFromCart(cartDetails._id) &&
                      addToWishList(cartDetails)
                    }
                  >
                    Move to Whishlist <AiOutlineHeart />
                  </button>

                  <button
                    class="btn solid-pri-btn mg-top8 delete-btn"
                    onClick={() => removeFromCart(cartDetails._id)}
                  >
                    Remove From Cart <AiOutlineDelete />
                  </button>
                </div>
              </div>
            </div>
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
      <div class="card capitalize fW-500 color text-left mgT-8 flex-row align-center">
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
        Quantity: {quantity}
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
