import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firbase/firbaseConfig";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    try {
      signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          console.log(userCredential.user.email);
          navigate("/welcome");
        }
      );
    } catch (error) {
      console.log("Error Occured while logging In");
      console.error(error);
    }
  }
  return (
    <>
      <div className="container">
        <div className="login-heading">
          <h2>Login</h2>
          <p>Continue your journey with our Product</p>
        </div>
        <form className="form" onSubmit={handleLogin}>
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
          <button className="btn" type="submit">
            Login
          </button>
        </form>
      </div>
      <p className="bottom">
        First visit?{" "}
        <Link to={"/signup"} className="link">
          SignUp
        </Link>
      </p>{" "}
    </>
  );
}

export default Login;
