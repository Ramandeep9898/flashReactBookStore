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
            <div className="margin">
              <Link to="/productListingPage">
                <button className="btn cta-black-btn">
                  shop now <BsArrowUpRight />
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
