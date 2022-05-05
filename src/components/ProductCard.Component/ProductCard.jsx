import react from "react";
import "./productCard.css";
import { useData } from "../../customHooks/useData";
import getSortedProducts from "../Aside.component/getSortedProducts";
import { useProduct } from "./productContext";

const Products = () => {
  const { state } = useProduct();
  const { productData, categoryData } = useData();
  const sortProducts = productData
    ? getSortedProducts(productData, state.sortBy)
    : [];
  console.log(sortProducts);

  return (
    <main className="product-page-main">
      <div className="product-page-main-heading mgT-20">
        <p className="h5 color capitalize fW-600">showing the products</p>
        <span className="h6">(showing 20 products)</span>
      </div>
      <div className="product-cards">
        {sortProducts.length &&
          sortProducts.map(
            ({
              _id,
              title,
              subTitle,
              img,
              originalPrice,
              discountedPrice,
              author,
              rating,
              categoryName,
            }) => (
              <div key={_id} className="product-cards">
                <div className="card-basic">
                  <button className="Floating-btn postion ">
                    <i className="far fa-heart fa-lg"></i>
                  </button>
                  <img src={img} alt="" className="avatar sq-avatar card-img" />
                  <div className="card-typo">
                    <div className="card capitalize fW-400 color text-left mgT-8">
                      {title}
                    </div>
                    <div className=" card-subtitle capitalize fW-400 color text-left mgT-4">
                      {subTitle}
                    </div>
                    <div className="card capitalize fW-500 color text-left mgT-8">
                      &#8377;{discountedPrice}
                    </div>
                    <button className="btn solid-pri-btn width100 mg-top8">
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
    </main>
  );
};
export default Products;
