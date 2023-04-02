import { useData } from "../../../../customHooks/useData";
import { Card } from "../../../ProductCard/Card";

export const MostPopularCategory = () => {
  const { productData } = useData();
  const popularBooks = productData.filter((item) => item.badge === "popular");
  console.log(popularBooks);
  return (
    <>
      {popularBooks.map((books) => {
        return <Card productDetails={books} />;
      })}
    </>
  );
};
