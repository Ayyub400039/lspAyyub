import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Routes, Route, Navigate } from "react-router-dom";
import { isFirefox, isChrome, isEdge } from "react-device-detect";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Background from "./component/Background/Bg";

function App() {
  const { user } = useSelector((state) => state.auth);

  const renderContent = () => {
    if (isFirefox || isChrome || isEdge) {
      return (
        <>
          <Routes>
            <Route
              exact
              path="/"
              element={!user ? <SignIn /> : <Navigate to="/home" />}
            />
            <Route
              exact
              path="register"
              element={!user ? <SignUp /> : <Navigate to="/home" />}
            />
            <Route
              exact
              path="home/*"
              element={user ? <Home /> : <Navigate to="/" />}
            />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
          <ToastContainer autoClose={4000} />
        </>
      );
    }
    return (
      <>
        <Background />
        <div className="notSupportBrowsers">
          <h1>
            Buka Dengan Browser <span className="fox">Firefox</span>,{" "}
            <span className="edge">Edge</span> atau{" "}
            <span className="chm">Chrome</span>
          </h1>
        </div>
      </>
    );
  };

  return renderContent();
}

export default App;
