// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuMzk0Vzmz8-I9ooH1GmFrs_ypVk2F4FM",
  authDomain: "energy-saver-8db83.firebaseapp.com",
  databaseURL: "https://energy-saver-8db83-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "energy-saver-8db83",
  storageBucket: "energy-saver-8db83.appspot.com",
  messagingSenderId: "828804772703",
  appId: "1:828804772703:web:9424e72b103ec2d65ebcea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};
