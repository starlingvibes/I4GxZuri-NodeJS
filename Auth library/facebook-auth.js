// GOOGLE
// Enable Google auth from firebase by providing email

// GITHUB
// Go the github profile > developer settings to obtain client ID and client secret
// Click on OAuth apps, and create a new app
// Set the Authorization callback url to the value gotten from firebase
// Copy the client ID and insert into firebase
// Click on generate a new client secret then link to firebase too  
import firebase from firebase

const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
}); 

const socialAuth = (provider) => {
    return firebase.auth.signInWithPopup(provider).then((res)=> {
        console.log("User successfully signed in")
        return res.user;
    }).catch((err)=> {
        return err;
    })
}

const facebookProvider = new firebase.auth.FacebookAuthProvider()

// handler for sign-in button
const handleOnClick = async (provider) => {
    const response = await socialAuth(provider)
    console.log(response)
}