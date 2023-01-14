import * as React from "react";
import "./FormStroke.css";
const FormStroke = (props) => {
  return (
    <input
      className="login-form-stroke"
      placeholder={props.username || "Password"}
      type="text"
    />
  );
};
export default FormStroke;
