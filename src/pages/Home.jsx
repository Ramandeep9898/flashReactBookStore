import react from "react";
import Header from "./../components/Header.component/Header";
import Hero from "../components/HomePage.component/Home.Component/Hero.Component/Hero";
import Categories from "../components/HomePage.component/Home.Component/Categories.Component/Category";
import Footer from "../components/HomePage.component/Home.Component/Footer.Component/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Footer />
    </>
  );
};

export default Home;
