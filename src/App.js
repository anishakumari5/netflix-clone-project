import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { Counter } from "./features/counter/Counter";
import "./App.css";
import LoginScreen from "./screens/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //Logged In
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //Logged Out
        dispatch(logout()); //This command basically clears or resets the dispatch function
      }
    });
    return unsubscribe;
  }, [dispatch]); //The useEffect is dependent on dispatch method and hence [dispatch] should always be written as it checks for dispatch again if it's true or false
  return (
    <div className="App">
      <BrowserRouter>
        {!user ? (
          <LoginScreen />
        ) : (
          /* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */
          <Routes>
            <Route path="/profile" element={<ProfileScreen />} />
            <Route exact path="/" element={<HomeScreen />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
