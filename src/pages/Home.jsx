import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div>Home</div>
      <Link to={"/signup"} className="link">
        SignUp
      </Link>
    </>
  );
}

export default Home;
