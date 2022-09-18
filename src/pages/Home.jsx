import React, { useState } from "react";
import { logOut } from "../fireConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout as logoutReducer } from "../context/authReduce";
import FormSkripsi from "../Resource/FormSkripsi";
import Informasi from "../component/Info";
import BgImg from "../component/Background/bgImg";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await logOut();
    dispatch(logoutReducer());
    navigate("/", {
      replace: true,
    });
  };

  return (
    <>
      <BgImg />
      <div className="container">
        <div className="user-info">
          Hello <span className="user-text"> {user.displayName} </span>
        </div>

        <div className="main">
          <FormSkripsi />
          <Informasi />
        </div>

        <div className="btn-logout">
          <button href="#" className="btn-out" onClick={handleLogout}>
            Log out
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
