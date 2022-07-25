import React, { useEffect, useState, useRef } from 'react';
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
const [error, setError] = useState('');
const [message, setMessage] = useState("")

function handleSubmit(e) {
  e.preventDefault();
  try {
    setError('')
    await resetPassword(emailRef.current.value)
    setMessage("Check your inbox for further instructions")
  } catch {
    setError("Error resetting password")
  }
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
  }

  useEffect(() => {
    return auth.onStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    currentUser,
    resetPassword,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}


// Scotch IO NodeJS authentication - https://github.com/scotch-io/easy-node-authentication.git
// Scotch IO JWT NodeJS authentication - https://github.com/scotch-io/node-token-authentication.git