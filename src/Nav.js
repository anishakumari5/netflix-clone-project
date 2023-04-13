import React, { useEffect, useState } from "react";
import "./Nav.css";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate(); //This following snippet initializes navigate to a function called useNavigate() which is used to enable navigation between different parts of application

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png?20170904093427"
          alt="Netflix Logo"
        />
        <img
          onClick={() => navigate("/profile")}
          /*Here an onClick function has been initialized which would take us to the page called /profile when clicked on the Avatar,
          the /profile has been initialized in App.js at Routes part*/
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix User-Logo"
        />
      </div>
    </div>
  );
}

export default Nav;
