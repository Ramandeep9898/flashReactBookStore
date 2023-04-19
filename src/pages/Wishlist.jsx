import { WishlistCard } from "../components/Wishlist/WishlistCard";
import { useWishList } from "../contexts/useWishlist";
import { Card } from "../components/ProductCard/Card";
import "../components/Wishlist/whishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishList } = useWishList();
  return (
    <>
      <h1 className="mgT-16 heading">Wishlist</h1>
      <div className="wishlist-cards-section mgT-20">
        {wishList.length == 0 && (
          <div className="flex flex-col empty-layout">
            <div className="h3 fW-500">Nothing in WishList</div>
            <Link to="/productListingPage">
              <button className="btn blue-btn big-btn mgT-8">
                Explore Now!
              </button>
            </Link>
          </div>
        )}

        {wishList.length != 0 &&
          wishList.map((wishlistCardDetail) => {
            return <Card productDetails={wishlistCardDetail} />;
          })}
      </div>
    </>
  );
};

export default Wishlist;
