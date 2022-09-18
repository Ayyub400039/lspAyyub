import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Input from "../component/Input";
import { login as loginReducer } from "../context/authReduce";
import { loginHandler, signInGoogle } from "../fireConfig";
import Background from "../component/Background/Bg";
import Googlesvg from "../assets/GIcon.svg";

function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { values, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
  });

  const submit = async (e) => {
    e.preventDefault();
    const user = await loginHandler(values.email, values.password);
    if (user) {
      dispatch(loginReducer(user));
      navigate("/home", {
        replace: true,
      });
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    const user = await signInGoogle();
    if (user) {
      dispatch(loginReducer(user));
      navigate("/home", {
        replace: true,
      });
    }
  };

  const inputs = [
    {
      id: 1,
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter your username",
      value: values.email,
    },
    {
      id: 2,
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
      value: values.password,
    },
  ];

  return (
    <>
      <Background />
      <form onSubmit={handleSubmit} className="form-signin">
        <h1 className="title">Sign In</h1>
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
            Remember Me
          </label>
        </div>
        <button className="form-btn" onClick={submit}>
          Login
        </button>
        <div className="btn-sign-google">
          <div className="image-icon">
            <img src={Googlesvg} alt="icon" />
          </div>
          <button className="form-btn signGoogle" onClick={signInWithGoogle}>
            Login With Google
          </button>
        </div>
        <div className="form-new">
          {" "}
          New Here ?{" "}
          <Link to="/register" className="">
            Create an Account
          </Link>
        </div>
      </form>
    </>
  );
}

export default SignIn;
