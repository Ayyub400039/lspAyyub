import React from "react";
import { useNavigate } from "react-router-dom";
import Background from "../component/Background/Bg";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <Background />
      <div className="not-found">
        <h1 className="title">404</h1>
        <p className="desc">Page Not Found</p>
        <button onClick={handleBack}>Back To Login Page</button>
      </div>
    </>
  );
};

export default NotFound;
