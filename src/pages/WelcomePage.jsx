import { signOut } from "firebase/auth";
import { auth } from "../firbase/firbaseConfig";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();
  async function signOutUser() {
    try {
      signOut(auth).then(() => {
        navigate("/");
        console.log("Sucessfully Logout");
      });
    } catch (error) {
      console.log("error occured while logging out");
      console.error(error);
    }
  }
  return (
    <div>
      <h2>Welcome to our website!</h2>
      <p>You are successfully logged In</p>
      <button className="btn" onClick={signOutUser}>
        Log out
      </button>
    </div>
  );
}

export default WelcomePage;
