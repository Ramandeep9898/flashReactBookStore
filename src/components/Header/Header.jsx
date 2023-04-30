import "./header.css";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { IoLibraryOutline } from "react-icons/io5";
import { AiOutlineHeart, AiOutlineLogin } from "react-icons/ai";
import { BiHomeCircle, BiUserCircle } from "react-icons/bi";
import { useAuth } from "../../customHooks/useAuth";
import { useWishList } from "../../contexts/useWishlist";
import { useCart } from "../../contexts/useCart";

const Header = () => {
  const { cart } = useCart();
  const { wishList } = useWishList();
  const { user, encodedToken } = useAuth();
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
          <NavLink to="/">
            {({ isActive, isPending }) => (
              <div
                className={
                  isActive ? "navbar-icons nav-active" : "navbar-icons"
                }
              >
                <div className="nav-options-icon badge-on-avatar">
                  <BiHomeCircle />
                </div>
                <div className="nav-options-heading">home</div>
              </div>
            )}
          </NavLink>

          {/* Product listed page  */}
          <NavLink to="/productListingPage">
            {({ isActive, isPending }) => (
              <div
                className={
                  isActive ? "navbar-icons nav-active" : "navbar-icons"
                }
              >
                <div className="nav-options-icon  badge-on-avatar">
                  <IoLibraryOutline />
                </div>
                <div className="nav-options-heading">Books</div>
              </div>
            )}
          </NavLink>

          <NavLink to="/wishlist">
            {({ isActive, isPending }) => (
              <div
                className={
                  isActive ? "navbar-icons nav-active" : "navbar-icons"
                }
              >
                <div className="nav-options-icon  badge-on-avatar">
                  <AiOutlineHeart />
                  {wishList.length != 0 && (
                    <span className="badge-count-updated">
                      {wishList.length}
                    </span>
                  )}
                </div>
                <div className="nav-options-heading">WishList</div>
              </div>
            )}
          </NavLink>

          <NavLink to="/cart">
            {({ isActive, isPending }) => (
              <div
                className={
                  isActive ? "navbar-icons nav-active" : "navbar-icons"
                }
              >
                <div className="nav-options-icon  badge-on-avatar">
                  <FiShoppingBag />
                  {cart.length != 0 && (
                    <span className="badge-count-updated">{cart.length}</span>
                  )}
                </div>

                <div className="nav-options-heading">Cart</div>
              </div>
            )}
          </NavLink>
        </section>

        <section className="nav-container-endsec">
          <Link to="/productListingPage">
            <div className="badge-on-avatar navbar-icons">
              {encodedToken ? (
                <Link to="/user">
                  <div className="navbar-icons">
                    <div className="nav-options-icon  badge-on-avatar">
                      <BiUserCircle />
                      {/* <span className="badge-count-updated"></span> */}
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
