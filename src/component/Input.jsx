import React from "react";

function Input(props) {
  const { label, errors, errorMessage, touched, ...inputProps } = props;

  return (
    <div className="form-grup">
      <label className="form-label">{label}</label>
      <input {...inputProps} />
      <span className="form-mssg">{touched && errorMessage}</span>
    </div>
  );
}

export default Input;
