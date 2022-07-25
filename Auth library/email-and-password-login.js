import React, {  useEffect, useState, useRef } from 'react';
import firebase from 'firebase';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
});

const auth = app.auth();
const AuthContext = React.createContext();

const emailRef = useRef();
const passwordRef = useRef();
const [error, setError] = useState('');

function handleSubmit(e) {
  e.preventDefault();
  try {
    setError('')
    await login(emailRef.current.value, passwordRef.current.value);
  } catch {
    setError("Error signing in")
  }
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    return auth.onStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser,
    login,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
