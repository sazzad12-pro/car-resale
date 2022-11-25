import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.congif";

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";

const auth = getAuth(app);

export const AuthContext = createContext();

const UseContextApi = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   google provider section
  const googleProvider = new GoogleAuthProvider();
  const googleSingUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // create user email
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (userInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, userInfo);
  };

  //   auth user state change
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ googleSingUp, createUser, updateName, loading, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default UseContextApi;
