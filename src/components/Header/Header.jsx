import "./header.css";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineLogin } from "react-icons/ai";
import { BiHomeCircle } from "react-icons/bi";
import { useAuth } from "../../customHooks/useAuth";
import { BiUserCircle } from "react-icons/bi";
import { useWishList } from "../../contexts/useWishlist";
import { useCart } from "../../contexts/useCart";

const Header = () => {
  const { cart } = useCart();
  const { wishList } = useWishList();
  const { user } = useAuth();
  console.log(user);
  return (
    <header className="product-page-header">
      <nav className="navigation">
        <section className="nav-container-startsec">
          {/* link to homepage */}
          {/* <Link to="/"> */}
          {/* <img src={logo} alt="logo" /> */}
          {/* </Link> */}
          <Link to="/">
            <span className="nav-title">flashBookStore</span>
          </Link>
        </section>

        <section className="nav-container-endsec">
          {/* home icon  */}
          <Link to="/">
            <div className="navbar-icons">
              <div className="nav-options-icon badge-on-avatar">
                <BiHomeCircle />
              </div>
              <div className="nav-options-heading">home</div>
            </div>
          </Link>

          {/* Product listed page  */}
          <Link to="/productListingPage">
            <div className="navbar-icons">
              <div className="nav-options-icon  badge-on-avatar">
                <IoLibraryOutline />
              </div>
              <div className="nav-options-heading">Books</div>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="navbar-icons">
              <div className="nav-options-icon  badge-on-avatar">
                <AiOutlineHeart />
                {wishList.length != 0 && (
                  <span className="badge-count">{wishList.length}</span>
                )}
              </div>
              <div className="nav-options-heading">WishList</div>
            </div>
          </Link>

          <Link to="/cart">
            <div className="navbar-icons">
              <div className="nav-options-icon  badge-on-avatar">
                <FiShoppingBag />
                {cart.length != 0 && (
                  <span className="badge-count">{cart.length}</span>
                )}
              </div>

              <div className="nav-options-heading">Cart</div>
            </div>
          </Link>
        </section>

        <section className="nav-container-endsec">
          <Link to="/productListingPage">
            <div className="badge-on-avatar navbar-icons">
              {user ? (
                <Link to="/user">
                  <div className="navbar-icons">
                    <div className="nav-options-icon  badge-on-avatar">
                      <BiUserCircle />
                      {/* <span className="badge-count"></span> */}
                    </div>

                    <div className="nav-options-heading">{user.firstName}</div>
                  </div>
                </Link>
              ) : (
                <Link to="/auth">
                  <button className="btn blue-btn">
                    login
                    <AiOutlineLogin />
                  </button>
                </Link>
              )}
            </div>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
