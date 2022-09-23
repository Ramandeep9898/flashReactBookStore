import React from "react";
import { useState } from "react";
import Login from "../Login.Component/Login";
import SignUp from "../Signup.Component/Signup.jsx";

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
