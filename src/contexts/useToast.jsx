import { useReducer, createContext, useContext } from "react";
import { toastReducer } from "../components/useReducer/ToastReducer";

const ToastContext = createContext();

const useToast = () => useContext(ToastContext);

function ToastProvider({ children }) {
  const [toastList, dispatch] = useReducer(toastReducer, []);

  return (
    <ToastContext.Provider value={{ toastList, dispatch }}>
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider, useToast };
