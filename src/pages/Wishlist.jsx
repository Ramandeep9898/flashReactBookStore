import { WishlistCard } from "../components/Wishlist/WishlistCard";
import { useWishList } from "../contexts/useWishlist";
import "../components/Wishlist/whishlist.css";

const Wishlist = () => {
  const { wishList } = useWishList();
  return (
    <>
      <h1 className="mgT-16 heading">Wishlist</h1>
      <div className="wishlist-cards-section mgT-20">
        {wishList.map((wishlistCardDetail) => {
          return <WishlistCard wishlistCardDetail={wishlistCardDetail} />;
        })}
      </div>
    </>
  );
};

export default Wishlist;
