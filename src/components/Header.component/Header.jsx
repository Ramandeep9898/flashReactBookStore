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
              <Link to="/login">
                <div className="size">
                  <CgProfile size="lg" />
                </div>
                <span>login</span>
              </Link>
            </div>
          </Link>

          <Link to="/login">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineHeart size="lg" />
                <span className="badge-count">2</span>
              </div>
              <span>favourities</span>
            </div>
          </Link>

          <Link to="/login">
            <div className="navbar-icons">
              <div className="size badge-on-avatar">
                <AiOutlineShopping size="lg" />
                <span className="badge-count">2</span>
              </div>
              <span>cart</span>
            </div>
          </Link>
        </section>
      </nav>
    </header>
  );
};

export default Header;
