import "./App.css";
import { useState, useEffect } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import WelcomePage from "./pages/WelcomePage";
import { auth } from "./firbase/firbaseConfig.js";

function App() {
  const PrivateRoute = ({ element, ...rest }) => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged((user) => {
        if (user) {
          // User is authenticated
          setAuthenticated(true);
        } else {
          // User is not authenticated
          setAuthenticated(false);
          navigate("/login"); // Redirect to the login page if not authenticated
        }
      });

      return () => unsubscribe();
    }, [navigate]);

    return authenticated ? element : null;
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/welcome"
          element={<PrivateRoute element={<WelcomePage />} />}
        />
      </Routes>
    </div>
  );
}

export default App;
