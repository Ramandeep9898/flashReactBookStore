import { createContext, useContext, useReducer } from "react";
import { sortReducerFunc } from "../Aside.component/sortReducerFunc";
const ProductContext = createContext();
const initialState = {
  sortBy: "",
};
// categories: { clothing: false, wallart: false },
// price: 5000,
// discount: "",
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
