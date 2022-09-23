import mainSVG from "./main.svg";
import "./hero.css";
import { Link } from "react-router-dom";
import { BsArrowUpRight } from "react-icons/bs";

const Hero = () => {
  return (
    <>
      <section className="main">
        <main className="main-first-half">
          <div className="aside-main-section text-left">
            <p className=" capitalize">
              Feel <br /> authentic <br /> Peace
            </p>
            <span className=" capitalize mg-top8">
              Browse & Discover Thousands of Books. Read Customer Reviews and
              Find Best Sellers. Top Brand and Quality Books.
            </span>
            <div className="mg-top8">
              <Link to="/productListingPage">
                <button className="btn solid-pri-btn mg-top16">
                  shop now
                  <BsArrowUpRight />
                </button>
              </Link>
            </div>
          </div>
        </main>
        <main className="hero-SVG">
          <img src={mainSVG} alt="" />
        </main>
      </section>
    </>
  );
};

export default Hero;
