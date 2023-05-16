import React from "react";
import { useAuth } from "../../customHooks/useAuth";

const User = () => {
  const { user, logOutAuth } = useAuth();
  return (
    <>
      <div className="product-page-aside">
        <section className="aside-sec mgT-20"></section>
      </div>
    </>
  );
};
export default User;
