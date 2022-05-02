import react from "react";
import "./aside.css";
const Aside = () => {
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
          <p className="h5 color capitalize fW-600">price</p>
        </div>

        <div className="aside-sec-heading mgT-40">
          <p className="h5 color capitalize fW-600">categories</p>

          <ul className="list">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                women
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
            {/* <!-- <li className="list-divider"></li> --> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                men
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            {/* <!-- <li className="list-divider"></li> --> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                kids
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                sale
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
          </ul>
        </div>

        <div className="aside-sec-heading mgT-40">
          <p className="h5 color capitalize fW-600">rating</p>

          <ul className="list ">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                4 star & above
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
            {/* <!-- <li className="list-divider"></li> --> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                3 star & above
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>

            {/* <!-- <li className="list-divider"></li> --> */}
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

        <div className="aside-sec-heading mgT-40">
          <p className="h5 color capitalize fW-600">sort by</p>

          <ul className="list ">
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                price - low to high
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
            {/* <!-- <li className="list-divider"></li> --> */}
            <li className="list-items ">
              <span className="list-with-icons checkbox h6 color capitalize fW-400">
                price - high to low
                <input type="checkbox" className="input-ckeckbox" />
              </span>
            </li>
          </ul>
        </div>
      </section>
    </aside>
  );
};
export default Aside;
