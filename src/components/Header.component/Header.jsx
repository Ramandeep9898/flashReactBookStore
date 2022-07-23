import react from "react";
import "./header.css";
import logo from "./lightning64px.png";
import { Link } from "react-router-dom";
import {
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineSearch,
} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className="product-page-header">
      <nav className="navigation">
        <section className="nav-container-startsec">
          {/* link to homepage */}
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <span className="nav-title">flashBookStore</span>
        </section>

        {/* search btn  */}
        <section className="nav-container-startsec nav-search">
          <div className="search-btn">
            <button className="btn solid-sec-btn postion-abso">
              <AiOutlineSearch />
            </button>
            <input type="search" placeholder="Search..." />
          </div>
        </section>

        {/* login */}
        <section className="nav-container-endsec">
          <Link to="/login">
            <div className="badge-on-avatar navbar-icons">
              <div className="size">
                <CgProfile size="lg" />
              </div>
            </div>
          </Link>

          {/* link to wishlist */}
          <Link to="/wishlist">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineHeart size="lg" />
                <span className="badge-count">2</span>
              </div>
            </div>
          </Link>

          {/* link to cart */}
          <Link to="/cart">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineShopping size="lg" />
                <span className="badge-count">2</span>
              </div>
            </div>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
