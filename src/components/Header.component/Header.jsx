import react from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { AiOutlineShopping,AiOutlineHeart ,AiOutlineSearch } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
    return(
        <header className="product-page-header">
        <nav className="navigation">
            <section className="nav-container-startsec">
            <Link to="/">
            <img src="" alt="logo"/></Link>
            <span className="nav-title">flash.store</span>
            </section>

            <section className="nav-container-startsec nav-search">
                <div className="search-btn">
                    <button className="btn solid-sec-btn postion-abso">
                    <AiOutlineSearch/>
                    </button>
                    <input type="search" placeholder="Search..."/>
                </div>
            </section>
            
            <section className="nav-container-endsec">
                <Link to="/login" className="navbar-icons">
                    <CgProfile/>
                    <span>login</span>
                </Link>
                <Link to="/wishlist" className="navbar-icons">
                    <AiOutlineHeart/>
                    <span>favourities</span>
                </Link>
                <Link to="/cart" className="navbar-icons">
                    <AiOutlineShopping/>
                    <span>cart</span>
                </Link>
            </section>
        </nav>
    </header>
    )
}

export default Header; 