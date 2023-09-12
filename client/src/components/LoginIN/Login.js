import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../../JS/userSlice/userSlice";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  let navigate = useNavigate();
  return (
    <div class="center">
      <h1>Please Sign IN</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div class="inputbox">
          <input
            type="text"
            required="required"
            onChange={(e) => setlogin({ ...login, email: e.target.value })}
          />
          <span>Email</span>
        </div>
        <div class="inputbox">
          <input
            type="text"
            required="required"
            onChange={(e) => setlogin({ ...login, password: e.target.value })}
          />
          <span>Password</span>
        </div>
        <div class="inputbox">
          <input
            type="button"
            value="submit"
            onClick={() => (dispatch(userLogin(login)), navigate("/"))}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
