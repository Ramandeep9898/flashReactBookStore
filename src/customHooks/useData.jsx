const axios = require("axios").default;
import React, { useState, useEffect } from "react";

export const useData = () => {
  const [productData, setProductData] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    (async () => {
      const responseProduct = await axios.get("/api/products");
      setProductData(responseProduct.data.products);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const responseCategory = await axios.get("/api/categories");
      setCategoryData(responseCategory.data.categories);
    })();
  }, []);
  return { productData, categoryData };
};
