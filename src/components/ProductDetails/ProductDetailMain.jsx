import { useParams } from "react-router-dom";
import { useData } from "../../customHooks/useData";
import ProductDetails from "./ProductDetails";

const ProductDetailMain = () => {
  const { productData } = useData();

  const { productID } = useParams();

  const getProductDetails = (products, productID) => {
    return products.find((product) => product._id === productID);
  };

  const product = getProductDetails(productData, productID);

  return (
    <>
      <ProductDetails {...product} product={product} />
    </>
  );
};

export default ProductDetailMain;
