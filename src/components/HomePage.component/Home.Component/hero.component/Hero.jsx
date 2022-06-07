import react from "react";
// import mainBackGround from "./hero-bg.jpg";
import mainSVG from "./taxi-librarian.png";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <section className="main">
        <main className="main-first-half">
          <div className="aside-main-section text-left">
            <p className=" capitalize ">last minute gift guide</p>
            <p className=" fW-700 uppercase ">up to 70% off</p>
            <span className="gray-color ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. At autem
              nihil alias reiciendis atque voluptatibus soluta laudantium, aut
              labore maiores nulla facilis, tenetur sapiente rem laborum harum
              quod fugiat officiis?
            </span>
            <div className="mgT-20">
              <a href="#">
                <button className="btn solid-pri-btn">shop now</button>
              </a>
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
