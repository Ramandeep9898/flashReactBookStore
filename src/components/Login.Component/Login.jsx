import react from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <main Name="login-main">
        <div className="login-container">
          <div className="login-body">
            <p className="h3 color capitalize fW-700 text-center">login</p>
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

            <div className="login-remember-ad-forget-pass dis-f">
              <div className="remen-me mgT-20">
                <input type="checkbox" />
                <label className="textarea-label">Remember Me</label>
              </div>
              <div className="forget-pass">
                <span className="textarea-label">forget your password?</span>
              </div>
            </div>
            <button className="btn solid-pri-btn width100 mgT-20">login</button>

            <Link to="/signup">
              <p className="h5 color capitalize fW-500 text-center mgT-20">
                create new account &#62;
              </p>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};
export default Login;
