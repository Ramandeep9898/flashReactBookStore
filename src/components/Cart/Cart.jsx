import { useCart } from "../../contexts/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";
import { AiOutlineDelete, AiOutlineHeart } from "react-icons/ai";
import { useWishList } from "../../contexts/useWishlist";
import { GrFormSubtract } from "react-icons/gr";
import { IoMdAdd } from "react-icons/io";
import "./cart.css";

export const CartCard = () => {
  const { user } = useAuth();
  const { wishList, addToWishList, removeFromWishList } = useWishList();

  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();
  const pathName = useLocation();
  // const { removeFromCart, updateCartItemQuantity } = useCart();
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
                <div class="card-updated capitalize fW-400 color text-left mgT-8">
                  {cartDetails.title}
                </div>
                <div class="card-subtitle capitalize fW-400 color text-left mgT-4">
                  by {cartDetails.author}
                </div>

                <div class="card capitalize fW-500 color text-left mgT-8">
                  &#8377; {cartDetails.originalPrice}
                </div>

                <div class="card capitalize fW-500 color text-left mgT-8 flex-row align-center">
                  <button className="quantity-btn">
                    <GrFormSubtract />
                  </button>
                  Quantity:
                  <button className="quantity-btn">
                    <IoMdAdd />
                  </button>
                </div>

                <div className="flex-row mgT-8">
                  <button
                    class="btn solid-pri-btn  mg-top8 gray-btn"
                    onClick={() => removeFromCart(cartDetails._id)}
                  >
                    Move to Whishlist <AiOutlineHeart />
                  </button>

                  <button
                    class="btn solid-pri-btn  mg-top8 delete-btn"
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
