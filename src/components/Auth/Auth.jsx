import React from "react";
import { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../Signup/Signup.jsx";

export function Auth() {
  const [authVal, setAuthVal] = useState(true);

  return (
    <>
      {authVal ? (
        <Login setAuthVal={setAuthVal} />
      ) : (
        <SignUp setAuthVal={setAuthVal} />
      )}
    </>
  );
}
