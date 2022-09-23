import react from "react";
import Header from "./../components/Header.component/Header";
import Hero from "../components/HomePage.component/Home.Component/hero.component/Hero";
import Categories from "../components/HomePage.component/Home.Component/Categories.Component/Category";
import Footer from "../components/HomePage.component/Home.Component/Footer.Component/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Categories />
    </>
  );
};

export default Home;
