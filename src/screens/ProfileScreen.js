import React from "react";
import "./ProfileScreen.css";
import Nav from "../Nav";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { auth } from "../firebase";
import LowerScreen from "./LowerScreen";

export default function ProfileScreen() {
  const user = useSelector(selectUser); //This is required to fetch the user information from redux which has been passed to it, which is stored in App.js

  return (
    <div className="ProfileScreen">
      <LowerScreen />
      <Nav />
      {/*Reusing Nav Bar Here we have used the Nav bar. It just imports the components of Nav bar directly and hence we won't 
      have to write any extra pieces of code. Here Netflix and Avatar logo gets importe directly in ProfileScreen page*/}
      <div className="ProfileScreen__body">
        <h1>Edit Profile</h1>
        <div className="ProfileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Avatar Logo"
          />
          <div className="ProfileScreen__details">
            <h2>{user.email}</h2>
            <div className="ProfileScreen__plans">
              <h3>Plans</h3>
            </div>
            <div className="Subscription__Netflix">
              <h4 className="Basic__Netflix">Netflix Basic Plan</h4>
              <p className="para1">720p</p>
              <button className="Button__Netflix">Subscribe</button>
            </div>
            <div className="Subscription__Netflix">
              <h4 className="Basic__Netflix">Netflix Standard</h4>
              <p className="para1">1080p</p>
              <button className="Button__Netflix">Subscribe</button>
            </div>
            <div className="Subscription__Netflix">
              <h4 className="Basic__Netflix">Netflix Premium</h4>
              <p className="para1">4K/HDR</p>
              <button className="Button__Netflix">Subscribe</button>
            </div>
            <button
              /*The onClick code below is basically used to log the user out of the application when the user clicks on the button, it uses
              the auth from the firebase.js file. When the user signs out then the condition of user becomes false and thus gets hovered 
              to the LoginScreen. (Code for user condition present in App.js) */
              onClick={() => auth.signOut()}
              className="ProfileScreen__signOut"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
