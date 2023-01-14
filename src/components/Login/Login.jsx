import * as React from "react";
import { useNavigate } from "react-router";
import "./Login.css";
import imagesLogin from "./assets/imagesLogin.svg";
import vector from "./assets/vector.svg";
import MainButtons from "./components/MainButtons";
import FormStroke from "./components/FormStroke";
function Login(props) {

  const navigate = useNavigate();

  const propsData = {
    formStroke1: {
      username: "Email",
    },
    formStroke: {
      username: "Password",
    },
    mainButtons: {
      mainButton: "Login",
      vector: vector,
      link: "/members",
    },
  };
  return (
    <div className="login">
      <img className="images-login" src={imagesLogin} />
      <span className="energy-saver-can-cha">
        Energy saver can change way you live in the future
      </span>
      <FormStroke
        className="form-stroke-1-instance"
        {...propsData.formStroke1}
      />
      <FormStroke
        className="form-stroke-instance-1"
        {...propsData.formStroke}
      />
      <MainButtons
        className="main-buttons-instance-1"
        {...propsData.mainButtons}
      />
      <span className="dont-have-an-account">
        Don’t have an account? Sign up
      </span>
      <hr className="line-signup" />
    </div>
  );
};
export default Login;
