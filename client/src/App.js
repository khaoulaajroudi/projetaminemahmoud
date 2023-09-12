import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/LoginIN/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar"
import Card from './components/Card-Commande/Card'
import Navbaradmin from './components/Dashboard-admin/Navbar-admin/Navbar-admin'
function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      dispatch(userCurrent());
    }
  }, []);
  return (
    <div className="App">
      <div className="header">
      <Navbar />
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div>

      <Routes>
        <Route exact path="/" element={<Navbaradmin />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/list" element={<Card />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>
    </div>
  );
}

export default App;
