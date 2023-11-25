import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <>
      <div className="container">
        <div className="login-heading">
          <h2> Sign Up</h2>
          <p>Continue your journey with our Product</p>
        </div>
        <form className="form">
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              required
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div className="password-confirm-container">
            <label htmlFor="passwordConfirm">Password Confirm</label>
            <input
              type="password"
              name="passwordConfirm"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
          <button className="btn">Sign Up</button>
        </form>
      </div>
      <p className="bottom">
        Already have an account?{" "}
        <Link to={"/login"} className="link">
          login
        </Link>
      </p>{" "}
    </>
  );
}

export default Signup;
