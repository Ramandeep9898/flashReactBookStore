import react from "react";
import "./categories.css";
import fictionSVG from "./fictionSVG.svg";
import horrorSVG from "./horrorSVG.svg";
import nonFictionSVG from "./nonFictionSVG.svg";
import selfHelpSVG from "./self-helpSVG.svg";
const Categories = () => {
  return (
    <>
      <section className="categories">
        <p className="h1 capitalize text-center ">Trending categories</p>

        <div className="categories-card-container">
          <div className="categories-card">
            <div className="categories-card-img">
              <img src={fictionSVG} alt="" className="SVG" />
            </div>
            <span className="capitalize fW-500">fiction</span>
          </div>

          <div className="categories-card">
            <div className="categories-card-img">
              <img src={selfHelpSVG} alt="" className="SVG" />
            </div>
            <span className=" capitalize fW-500">self-help</span>
          </div>

          <div className="categories-card">
            <div className="categories-card-img">
              <img src={horrorSVG} alt="" className="SVG" />
            </div>
            <span className=" capitalize fW-500">horror</span>
          </div>

          <div className="categories-card">
            <div className="categories-card-img">
              <img src={nonFictionSVG} alt="" className="SVG" />
            </div>
            <span className="capitalize fW-500">non-fiction</span>
          </div>
        </div>
      </section>
    </>
  );
};
export default Categories;
