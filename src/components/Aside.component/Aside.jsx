import react from "react";
import { useReducer } from "react";
import "./aside.css";
import { useProduct } from "../ProductCard.Component/productContext";

const Aside = () => {
  const { state, dispatch } = useProduct();
  const { sortBy } = state;
  //   console.log(dispatch);

  return (
    <aside className="product-page-aside">
      <section className="aside-sec mgT-20">
        <div className="aside-sec-heading dis-f f-space-btw">
          <p className="h5 color capitalize fW-600">fliters</p>
          <a href="#">
            <p className="h5 color capitalize fW-400">clear</p>
          </a>
        </div>
        <div className="aside-sec-heading mgT-40">
          <datalist id="tickmarks">
            <p className="h5 color capitalize fW-600">price</p>
            <option value="1000" label="1k"></option>
            <option value="2000" label="2k"></option>
            <option value="3000" label="3k"></option>
            <option value="4000" label="4k"></option>
            <option value="5000" label="5k"></option>
          </datalist>
          <input
            type="range"
            name=""
            className="slider"
            step="1000"
            min="1000"
            max="5000"
          />
        </div>
        {/* <li className="list-divider"></li> */}

        {/* categories */}
        <div className="aside-sec-heading mgT-40">
          <p className="h5 color capitalize fW-600">categories</p>

          <ul className="list">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                self-help
                <input
                  type="checkbox"
                  id="checkbox"
                  className="input-ckeckbox"
                />
              </span>
            </li>
            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                fiction
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                non-fiction
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                horror
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
          </ul>
        </div>
        {/* rating */}
        <div className="aside-sec-heading mgT-40">
          <p className="h5 color capitalize fW-600">rating</p>

          <ul className="list ">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                4 star & above
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                3 star & above
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                2 star & above
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                1 star & above
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
          </ul>
        </div>
        {/* sort by */}
        <div className="aside-sec-heading mgT-40">
          <p className="h5 color capitalize fW-600">sort by</p>

          <ul className="list ">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                price - low to high
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  onClick={() => dispatch({ type: "LOW_TO_HIGH" })}
                  checked={sortBy === "LOW_TO_HIGH"}
                />
              </span>
            </li>
            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                price - high to low
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  onClick={() => dispatch({ type: "HIGH_TO_LOW" })}
                  checked={sortBy === "HIGH_TO_LOW"}
                />
              </span>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};
export default Aside;
