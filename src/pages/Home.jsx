import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Welcome To Our Website</div>
      <p className="bottom">
        First visit?{" "}
        <Link to={"/signup"} className="link">
          SignUp
        </Link>
      </p>{" "}
      <p className="bottom">
        Already have an account?{" "}
        <Link to={"/login"} className="link">
          login
        </Link>
      </p>{" "}
    </>
  );
}

export default Home;
