import React from "react";
import "./LoginScreen.scss";
import { useDispatch } from "react-redux";
import { Login } from "../../redux/actions/auth.action";
const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(Login());
  };
  return (
    <div className="login">
      <div className="login__container">
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button onClick={handleLogin}> Login with Google</button>
        <p> This project is made using Youtube Data Api</p>
      </div>
    </div>
  );
};

export default LoginScreen;
