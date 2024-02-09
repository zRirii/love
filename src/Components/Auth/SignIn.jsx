import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import React, { useState, useRef, useEffect } from "react";
import { auth } from "../../firebase";
import { useNavigate } from 'react-router-dom';
import "../../Assets/Styles/SignIn.css";

const SignIn = () => {
  const navigate = useNavigate();

  // Use localStorage to persist the login state
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    // Restore form input values on component mount
    if (emailRef.current && passwordRef.current) {
      setEmail(emailRef.current.value);
      setPassword(passwordRef.current.value);
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in successfully:", user);

        // Set login state in localStorage
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);

        // Don't navigate to '/notes'; let the user stay on the same page
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed out successfully");

        // Remove login state from localStorage
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Sign out failed:", error.message);
      });
  };

  return (
    <div className="login-container">
    {isLoggedIn ? (
      <div className="logged-in-message">
        <p>You are currently logged in.</p>
        <button className="login-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    ) : (
      <form className="login-form" onSubmit={handleSignIn}>
        <h1 className="login-title">Log In to your Account</h1>
        <input
          className="login-input"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
        <input
          className="login-input"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <button className="login-button" type="submit">
          Log In
        </button>
      </form>
    )}
  </div>
  
  );
};

export default SignIn;
