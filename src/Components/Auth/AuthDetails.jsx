import React, { useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import SignIn from "../Auth/SignIn"; // Import your SignIn component here
import AuthDetails from "./AuthDetails";

const AuthManager = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setAuthUser(user);
    });

    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => console.error("Sign out error:", error));
  };

  return (
    <div>
      {authUser ? (
        <>
          <AuthDetails user={authUser} onSignOut={userSignOut} />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

export default AuthManager;
