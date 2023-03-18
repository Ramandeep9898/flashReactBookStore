import { WishlistCard } from "../components/Wishlist.component/WishlistCard";
import { useWishList } from "../contexts/useWishlist";

const Wishlist = () => {
  const { wishList } = useWishList();
  return (
    <>
      <h1>Wishlist</h1>
      {wishList.map((wishlistCardDetail) => {
        return <WishlistCard wishlistCardDetail={wishlistCardDetail} />;
      })}
    </>
  );
};

export default Wishlist;
