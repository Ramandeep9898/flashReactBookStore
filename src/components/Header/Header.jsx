import react from "react";
import "./header.css";
import logo from "./flashHeaderLogo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineLogin,
} from "react-icons/ai";
import { BiHomeAlt } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
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
          <Link to="/">
            <span className="nav-title">flashBookStore</span>
          </Link>
        </section>

        <section className="nav-container-endsec">
          {/* home icon  */}
          <Link to="/">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <BiHomeAlt />
                {/* <span className="badge-count"></span> */}
              </div>
            </div>
          </Link>

          {/* Product listed page  */}
          <Link to="/productListingPage">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <ImBooks />
                {/* <span className="badge-count"></span> */}
              </div>
            </div>
          </Link>

          <Link to="/wishlist">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineHeart />
                {/* <span className="badge-count"></span> */}
              </div>
            </div>
          </Link>

          <Link to="/cart">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineShopping />
                {/* <span className="badge-count"></span> */}
              </div>
            </div>
          </Link>

          {/* <Link to="/productListingPage">
            <div className="badge-on-avatar navbar-icons">
              <Link to="/login">
                <button className="btn cta-black-btn">
                  login <AiOutlineLogin />
                </button>
              </Link>
            </div>
          </Link> */}

          {/* <div className="badge-on-avatar navbar-icons">
            <div className="size">
              <AuthIcon />
            </div>
          </div> */}
        </section>
      </nav>
    </header>
  );
};

export default Header;
