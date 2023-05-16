import "./categories.css";
import { BiBrain, BiGhost } from "react-icons/bi";
import { GiHealing } from "react-icons/gi";

import { MostPopularCategory } from "./MostPopularCategory";
const Categories = () => {
  return (
    <>
      <section className="categories">
        <div className="categories-card-container">
          <div className="categories-card">
            <div className="categories-card-img">
              <div className="card-icon">
                <svg
                  className="text-green-100 svg-blue-bg"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <svg
                  className="absolute text-green-600 w-9 h-9 svg-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              </div>
              <h2 className="capitalize mgT-16 fW-500">fiction</h2>
              <p className="capitalize mgT-8">
                Award-Winning Fiction: Feature books that have won literary
                awards or accolades.
              </p>

              <button className="btn outline-btn mgT-16">
                Explore Fiction
                <svg
                  className="w-6 h-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-img">
              {/* <div className="card-icon">
                <svg
                  className="svg-pink-bg"
                  width="72"
                  height="75"
                  viewBox="0 0 72 75"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M63.6911 28.8569C68.0911 48.8121 74.6037 61.2674 53.2349 65.9792C31.8661 70.6909 11.6224 61.2632 7.22232 41.308C2.82229 21.3528 3.6607 12.3967 25.0295 7.68503C46.3982 2.97331 59.2911 8.90171 63.6911 28.8569Z" />
                </svg>

                <div className="svg-pink">
                  <GiHealing />
                </div>
              </div> */}
              <div className="card-icon">
                <svg
                  className="text-green-100 svg-pink-bg"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                <svg
                  className="svg-pink"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h2 className="capitalize mgT-16 fW-500">Self Help</h2>
              <p className="capitalize mgT-8">
                Award-Winning Fiction: Feature books that have won literary
                awards or accolades.
              </p>

              <button className="btn outline-btn mgT-16">
                Explore Self help
                <svg
                  className="w-6 h-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-img">
              <div className="card-icon">
                <svg
                  className="text-green-100 svg-yellow-bg"
                  width="66"
                  height="68"
                  viewBox="0 0 66 68"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M65.5 30C65.5 50.4345 46.4345 68 26 68C5.56546 68 0 50.4345 0 30C0 9.56546 12.5655 0 33 0C53.4345 0 65.5 9.56546 65.5 30Z" />
                </svg>
                <div className="svg-yellow">
                  <BiBrain />
                </div>
              </div>
              <h2 className="capitalize mgT-16 fW-500">Non fiction</h2>
              <p className="capitalize mgT-8">
                Award-Winning Fiction: Feature books that have won literary
                awards or accolades.
              </p>

              <button className="btn outline-btn mgT-16">
                Explore Non fiction
                <svg
                  className="w-6 h-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="categories-card">
            <div className="categories-card-img">
              <div className="card-icon">
                <svg
                  className="text-green-100 svg-green-bg"
                  width="62"
                  height="64"
                  viewBox="0 0 62 64"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M62 13.001C62 33.4355 53.9345 64.001 33.5 64.001C13.0655 64.001 0 50.435 0 30.0005C0 9.56596 2.56546 4.00021 23 4.00021C43.4345 4.00021 62 -7.43358 62 13.001Z" />
                </svg>
                {/* <svg
                  className="svg-blue"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg> */}
                <div className="svg-green">
                  <BiGhost />
                </div>
              </div>
              <h2 className="capitalize mgT-16 fW-500">Horror</h2>
              <p className="capitalize mgT-8">
                Award-Winning Fiction: Feature books that have won literary
                awards or accolades.
              </p>

              <button className="btn outline-btn mgT-16">
                Explore Horror
                <svg
                  className="w-6 h-6 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="categories-popular mgT-40">
        <h3 className="h1 capitalize ">Most Popular Books</h3>
        <p className="capitalize mgT-8">
          Award-Winning Fiction: Feature books that have won literary awards or
          accolades.
        </p>

        <div className="categories-card-container">
          <MostPopularCategory />
        </div>
      </section>
      {/* <section className="categories-popular">
        <h3 className="h1 capitalize ">Most Popular Authors</h3>
        <p className="capitalize mgT-8">
          Award-Winning Fiction: Feature books that have won literary awards or
          accolades.
        </p>

        {/* <div className="categories-card-container">
          <MostPopularCategory />
        </div> */}
      {/* </section> */}
    </>
  );
};
export default Categories;
