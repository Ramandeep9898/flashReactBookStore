import { useCart } from "../../contexts/useCart";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

export const CartCard = () => {
  const { user } = useAuth();
  const { cart } = useCart();
  const navigate = useNavigate();
  const pathName = useLocation();
  const { removeFromCart, updateCartItemQuantity } = useCart();
  //   const { wishList, addToWishList, removeFromWishList } = useWishList();

  //   const isProductInWishList = wishList?.some((item) => item._id === product._id)
  //     ? true
  //     : false;
  return (
    <>
      {cart.map((abc) => {
        return (
          <div class="card-basic card-vertical">
            <img
              //   src="../images/shoes-removebg-preview.png"
              alt=""
              class="avatar sq-avatar card-img"
            />
            <div class="card-typo">
              <div class="card capitalize fW-400 color text-left mgT-8">
                nike force 1'07 SE
              </div>
              <div class="card-subtitle capitalize fW-400 color text-left mgT-4">
                women's shoes
              </div>
              <div class="card capitalize fW-500 color text-left mgT-8">
                &#8377;9000
              </div>
              <button class="btn solid-pri-btn width100 mg-top8">
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};
