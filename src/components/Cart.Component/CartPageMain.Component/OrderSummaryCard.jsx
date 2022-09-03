import react from "react";
import "./order-summary.css";

const OrderSummaryCard = () => {
  return (
    <>
      <div className="price-container">
        <p className="h5 color uppercase fW-600 text-left">price deatails</p>

        <li className="list-divider mgT-16"></li>

        <div className="dis-f f-space-btw mgT-16">
          <p className="h5 color capitalize fW-400">price</p>
          <p className="h5 color capitalize fW-400">&#8377;8000</p>
        </div>

        <div className="dis-f f-space-btw mgT-16">
          <p className="h5 color capitalize fW-400">discount</p>
          <p className="h5 color capitalize fW-400">- &#8377;2000</p>
        </div>

        <div className="dis-f f-space-btw mgT-16">
          <p className="h5 color capitalize fW-400">delivery charges</p>
          <p className="h5 color capitalize fW-400">&#8377;57</p>
        </div>

        <li className="list-divider mgT-16"></li>

        <div className="dis-f f-space-btw mgT-16">
          <p className="h5 color uppercase fW-600 text-left">total amount</p>
          <p className="h5 color uppercase fW-600">&#8377;6057</p>
        </div>

        <li className="list-divider mgT-16"></li>
        <p className="h5 color capitalize fW-400 mgT-16">
          you saved &#8377;2000 on this order
        </p>
        <button className="btn solid-pri-btn width100 mgT-16">
          place order
        </button>
      </div>
    </>
  );
};
export default OrderSummaryCard;
