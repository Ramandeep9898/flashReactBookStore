import { useEffect } from "react";

import { useToast } from "../../contexts/useToast";

export function Toast({ toast }) {
  const { dispatch } = useToast();
  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch({
        type: "TOAST_RESET",
        payload: toast._id,
      });
    }, 2000);
    return () => clearTimeout(timeout);
  }, [toast._id]);
  console.log("toast", toast.message);

  return (
    <div
      className={`sm-notification ${
        toast.type === "success" ? "sm-not-success" : "sm-not-error"
      } ${toast.show ? "" : "toast-hide"}`}
    >
      <span className="sm-alert-icon">
        <i
          className={`fas ${
            toast.type === "success"
              ? "fa-check-circle"
              : "fa-exclamation-circle"
          }`}
        ></i>
      </span>
      <span>{toast.message}</span>
    </div>
  );
}
