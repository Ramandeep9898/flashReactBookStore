import react from "react";
import { useReducer } from "react";
import "./aside.css";
import { useProduct } from "../ProductCard.Component/productContext";

const Aside = () => {
  const { state, dispatch } = useProduct();
  const { sortBy, discount, categories } = state;
  const { bestseller, fiction, nonfiction, horror } = categories;

  return (
    <aside className="product-page-aside">
      <section className="aside-sec mgT-20">
        <div className="aside-sec-heading dis-f f-space-btw">
          <p className="h5 color capitalize fW-600">fliters</p>

          {/* clear button  */}
          <button className="clear-btn">
            <p
              className="h6 color capitalize fW-400"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              clear all
            </p>
          </button>
        </div>

        {/* categories */}
        <div className="aside-sec-heading mgT-16">
          <p className="h5 color capitalize fW-600">categories</p>

          <ul className="list">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                Best Seller
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  name="bestseller"
                  value="bestseller"
                  id="checkbox-input"
                  checked={bestseller}
                  onChange={(e) => dispatch({ type: "BESTSELLER" })}
                />
              </span>
            </li>
            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                fiction
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  name="fiction"
                  value="fiction"
                  id="checkbox-input"
                  checked={fiction}
                  onChange={(e) => dispatch({ type: "FICTION" })}
                />
              </span>
            </li>

            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                non-fiction
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  name="nonfiction"
                  value="nonFiction"
                  id="checkbox-input"
                  checked={nonfiction}
                  onChange={(e) => dispatch({ type: "NONFICTION" })}
                />
              </span>
            </li>

            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                horror
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  name="horror"
                  value="horror"
                  id="checkbox-input"
                  checked={horror}
                  onChange={(e) => dispatch({ type: "HORROR" })}
                />
              </span>
            </li>
          </ul>
        </div>

        {/* Discount */}
        <div className="aside-sec-heading ">
          <p className="h5 color capitalize fW-600">discount</p>

          <ul className="list ">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                50% and above
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  checked={discount === 50}
                  value="50"
                  onChange={(e) =>
                    dispatch({ type: "DISCOUNT", value: e.target.value })
                  }
                />
              </span>
            </li>
            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                40% and above
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  checked={discount === 40}
                  value="40"
                  onChange={(e) =>
                    dispatch({ type: "DISCOUNT", value: e.target.value })
                  }
                />
              </span>
            </li>

            {/* <li className="list-divider"></li> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                30% and above
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  checked={discount === 30}
                  value="30"
                  onChange={(e) =>
                    dispatch({ type: "DISCOUNT", value: e.target.value })
                  }
                />
              </span>
            </li>

            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                20% and above
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  checked={discount === 20}
                  value="20"
                  onChange={(e) =>
                    dispatch({ type: "DISCOUNT", value: e.target.value })
                  }
                />
              </span>
            </li>

            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                10% and above
                <input
                  type="checkbox"
                  className="input-ckeckbox"
                  checked={discount === 10}
                  value="10"
                  onChange={(e) =>
                    dispatch({ type: "DISCOUNT", value: e.target.value })
                  }
                />
              </span>
            </li>
          </ul>
        </div>

        {/* sort by */}
        <div className="aside-sec-heading ">
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
