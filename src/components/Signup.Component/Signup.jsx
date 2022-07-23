import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <main className="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">sign up</p>
            <div className="input-box mgT-20">
              <label for="email" className="textarea-label">
                email
              </label>
              <input
                id="email"
                type="email"
                className="input"
                placeholder="you@example.com"
                valide
              />
            </div>

            <div className="input-box mgT-20">
              <label for="first-name" className="textarea-label">
                first name
              </label>
              <input
                id="first-name"
                type="text"
                className="input"
                placeholder="First Name"
                valide
              />
            </div>

            <div className="input-box mgT-20">
              <label for="last-name" className="textarea-label">
                last name
              </label>
              <input
                id="last-name"
                type="email"
                className="input"
                placeholder="Last Name"
                valide
              />
            </div>

            <div className="input-box mgT-20">
              <label for="password" className="textarea-label">
                password
              </label>
              <input
                id="password"
                type="password"
                className="input"
                placeholder="**********"
                valide
              />
            </div>

            <div className="input-box mgT-20">
              <label for="confirm-password" className="textarea-label">
                confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                className="input"
                placeholder="**********"
                valide
              />
            </div>

            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                <input type="checkbox" />
                <label className="textarea-label">
                  i accept all terms & conditions{" "}
                </label>
              </div>
            </div>
            <button className="btn solid-pri-btn width100 mgT-20">
              sign up
            </button>
            <Link to="/login">
              <p className="h5 color capitalize fW-500 text-center mgT-20">
                already have a account{" "}
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default Signup;
