import React from "react";
import "./user.css";
import { useAuth } from "../../customHooks/useAuth";

const User = () => {
  const { user, logOutAuth } = useAuth();
  return (
    <>
      <div className="user-page">
        <section className="aside-user ">
          <button className="h5 color capitalize fW-600 mgT-16">
            Profile Details
          </button>
          <div className="divider-vertical mgT-16"></div>

          <button className="h5 color capitalize fW-600 mgT-16">
            Address Details
          </button>
          <div className="divider-vertical mgT-16"></div>

          <button
            className="h5 color capitalize fW-600 mgT-16"
            onClick={() => logOutAuth()}
          >
            Logout{" "}
          </button>
        </section>
        <section className="section-info">
          <p className="h5 color capitalize fW-600 mgT-16">Profile Details</p>
          <div className="divider-vertical mgT-16"></div>
          <div className="input-body">
            <div className="input-box mgT-16">
              <label for="email" className="textarea-label">
                username
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                disabled
                value={user.firstName}
              />
            </div>

            <div className="input-box mgT-8">
              <label for="password" className="textarea-label">
                email
              </label>
              <input
                id="password"
                type="email"
                className="input"
                disabled
                value={user.email}
                // placeholder="**********"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default User;
