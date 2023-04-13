import React, { useRef } from "react";
import "./SignUpScreen.css";
import { auth } from "../firebase";

function SignUpScreen() {
  const emailref = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailref.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailref.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="SignUpScreen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailref} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <button type="submit" onClick={register}>
          Create Account
        </button>
      </form>
    </div>
  );
}

export default SignUpScreen;
