import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

const SignUp = ({ setAuthVal }) => {
  const { signUpAuth } = useAuth();
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    message: "",
  });

  const signUpHandler = (signUpDetails) => {
    signUpAuth(signUpDetails);
  };

  return (
    <>
      <main className="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="form-heading">Join Flashkart</p>
            <div className="input-box mgT-20">
              <input
                id="email"
                type="email"
                className="input-updated"
                placeholder="Email Address"
                valide
                value={signUpDetails.email}
                onChange={(e) => {
                  setSignUpDetails({ ...signUpDetails, email: e.target.value });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <input
                id="first-name"
                type="text"
                className="input-updated"
                placeholder="First Name"
                valide
                value={signUpDetails.firstName}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <input
                id="last-name"
                type="email"
                className="input-updated"
                placeholder="Last Name"
                valide
                value={signUpDetails.lastName}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              <input
                id="password"
                type="password"
                className="input-updated"
                placeholder="Password"
                valide
                value={signUpDetails.password}
                onChange={(e) => {
                  setSignUpDetails({
                    ...signUpDetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>

            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20"></div>
            </div>

            <div className="absolute mg-top16">
              <div className="gradient w100 mgT-40"></div>
              <button
                className="btn black-btn big-btn w100 "
                onClick={() => {
                  signUpHandler(signUpDetails);
                }}
              >
                sign up
              </button>
            </div>
            <p className="h5 color capitalize fW-400 text-center mgT-20">
              Already joined?{" "}
              <span
                className="fW-500 underline cursor"
                onClick={() => {
                  setAuthVal(true);
                }}
              >
                Login now
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignUp;
