import React from "react";
import { useAuth } from "../../customHooks/useAuth";

const User = () => {
  const { user, logOutAuth } = useAuth();
  console.log(user);
  return (
    <>
      <main className="user-main">
        <div className="user-container">
          <div className="avatar-container">
            <div className="avatar avatar-xl centre">
              <h1>{`${user.firstName[0]}${user.lastName[0]}`}</h1>
            </div>
          </div>
          <p className="h3 color capitalize fW-700 text-center mgT-16">{`${user.firstName} ${user.lastName}`}</p>
          <p className="h3 color  fW-700 text-center mgT-8">{`${user.email}`}</p>
          <div className="btn-container mgT-16">
            <button className="btn btn-sec-outlined">edit profile</button>
            <button
              class="btn solid-sec-btn"
              onClick={() => {
                logOutAuth();
              }}
            >
              log out
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
export default User;
