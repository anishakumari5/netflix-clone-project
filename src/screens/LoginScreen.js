import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";
import LowerScreen from "./LowerScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="LoginScreen__background">
        <img
          className="LoginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Netflix LoginScreen Logo"
        />
        <button onClick={() => setSignIn(true)} className="LoginScreen__button">
          Sign In
        </button>
        <div className="LoginScreen__gradient" />
      </div>
      <div className="LoginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
            <p1>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p1>
            <div className="LoginScreen__getStarted">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="GetStarted__button"
                >
                  Get Started{" "}
                </button>
              </form>
            </div>
          </>
        )}
      </div>
      <LowerScreen />
    </div>
  );
}

export default LoginScreen;
