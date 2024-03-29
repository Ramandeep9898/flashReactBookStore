import React from "react";
import { createContext, useContext, useReducer } from "react";
import { sortReducerFunc } from "../components/Aside/sortReducerFunc";

const ProductContext = createContext();
const initialState = {
  sortBy: "",
  categories: {
    bestseller: false,
    fiction: false,
    nonfiction: false,
    horror: false,
  },
  discount: "",
};
const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(sortReducerFunc, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
const useProduct = () => useContext(ProductContext);

export { useProduct, ProductProvider };
