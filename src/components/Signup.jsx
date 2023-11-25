import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firbase/firbaseConfig";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signUpUser(e) {
    e.preventDefault();
    try {
      console.log(password, confirmPassword);
      if (password === confirmPassword) {
        await createUserWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="container">
        <div className="login-heading">
          <h2> Sign Up</h2>
          <p>Continue your journey with our Product</p>
        </div>
        <form className="form" onSubmit={signUpUser}>
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
          <button className="btn" type="submit">
            Sign Up
          </button>
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
