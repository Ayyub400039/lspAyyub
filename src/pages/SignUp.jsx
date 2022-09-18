import React from "react";
import Input from "../component/Input";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { inputSchemas } from "../schema";
import { registerHandler } from "../fireConfig";
import Background from "../component/Background/Bg";

function SignUp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, handleSubmit, handleBlur, handleChange, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        confirmpassword: "",
      },
      validationSchema: inputSchemas,
    });

  const submit = async (e) => {
    e.preventDefault();
    const user = await registerHandler(values.email, values.password);
    if (user) {
      navigate("/", {
        replace: true,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      value: values.username,
      errorMessage: errors.username,
      touched: touched.username,
    },
    {
      id: 2,
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
      value: values.email,
      errorMessage: errors.email,
      touched: touched.email,
    },
    {
      id: 3,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: values.password,
      errorMessage: errors.password,
      touched: touched.password,
    },
    {
      id: 4,
      name: "confirmpassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Enter your Confirm Password",
      value: values.confirmpassword,
      errorMessage: errors.confirmpassword,
      touched: touched.confirmpassword,
    },
  ];

  return (
    <>
      <Background />
      <form onSubmit={handleSubmit} className="form-regist">
        <h1 className="title">Register</h1>
        {inputs.map((input) => (
          <Input
            key={input.id}
            className="form-input"
            {...input}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        ))}
        <div className="form-config">
          <div className="form-inf">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="form-input"
              required
            />
          </div>
          <label htmlFor="remember" className="form-txt">
            I agree with terms conditions and privacy policy
          </label>
        </div>
        <button className="form-btn" type="submit" onClick={submit}>
          Create Account
        </button>
        <div className="form-new">
          {" "}
          Already have an account ?{" "}
          <Link to="/" className="">
            Sign In
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignUp;
