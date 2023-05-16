import React, { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../customHooks/useAuth";

const Login = ({ setAuthVal }) => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({
    message: "",
  });
  const testLoginDetails = {
    email: "test@test.com",
    password: "test123",
  };

  const { logInAuth } = useAuth();
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/;

  const loginHandler = () => {
    logInAuth(loginDetails);
  };

  return (
    <>
      <main Name="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="form-heading ">Welcome Back to FlashKart</p>
            <div className="input-box mgT-20">
              <div>{errorMessage.message}</div>
              {/* <label for="email" className="textarea-label">
                email
              </label> */}
              <input
                id="email"
                type="email"
                className="input-updated"
                placeholder="you@example.com"
                value={loginDetails.email}
                valide
                onChange={(e) => {
                  setLoginDetails({ ...loginDetails, email: e.target.value });
                }}
              />
            </div>

            <div className="input-box mgT-20">
              {/* <label for="password" className="textarea-label">
                password
              </label> */}
              <input
                id="password"
                type="password"
                className="input-updated"
                placeholder="Password"
                valide
                value={loginDetails.password}
                onChange={(e) => {
                  setLoginDetails({
                    ...loginDetails,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                {/* <input type="checkbox" /> */}
                {/* <label className="textarea-label">Remember Me</label> */}
              </div>
              <div className="forget-pass mgT-20">
                <span
                  className="textarea-label cursor"
                  onClick={(e) => {
                    e.preventDefault();
                    setLoginDetails(testLoginDetails);
                  }}
                >
                  TEST LOGIN ?
                </span>
              </div>
            </div>

            <div className="absolute mg-top16">
              <div className="gradient w100 mgT-40"></div>

              <button
                className="btn black-btn big-btn w100"
                onClick={() => {
                  loginHandler();
                }}
              >
                login
              </button>
            </div>
            <p className="h5 color  fW-500 text-center mgT-20">
              Don’t have an account?{" "}
              <span
                className=" underline cursor"
                onClick={() => {
                  setAuthVal(false);
                }}
              >
                SignUp Now!
              </span>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
