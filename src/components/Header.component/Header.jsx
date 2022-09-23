import react from "react";
import "./header.css";
import logo from "./flashHeaderLogo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineLogin,
} from "react-icons/ai";
import { AuthIcon } from "./Header.icons/AuthIcon";

const Header = () => {
  return (
    <header className="product-page-header">
      <nav className="navigation">
        <section className="nav-container-startsec">
          {/* link to homepage */}
          {/* <Link to="/"> */}
          {/* <img src={logo} alt="logo" /> */}
          {/* </Link> */}
          <span className="nav-title">flashBookStore</span>
        </section>

        <section className="nav-container-endsec">
          <Link to="/productListingPage">
            <div className="badge-on-avatar navbar-icons">
              <Link to="/login">
                <button className="btn cta-black-btn">
                  login <AiOutlineLogin />
                </button>
              </Link>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineHeart />
                <span className="badge-count">2</span>
              </div>
            </div>
          </Link>

          <Link to="/cart">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineShopping />
                <span className="badge-count">2</span>
              </div>
            </div>
          </Link>

          <div className="badge-on-avatar navbar-icons">
            <div className="size">
              <AuthIcon />
            </div>
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
