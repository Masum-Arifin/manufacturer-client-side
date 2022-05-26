// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH5scFvVFvB0022uSBeCd9Dvwt6g78C0c",
  authDomain: "pc-doctor-8a268.firebaseapp.com",
  projectId: "pc-doctor-8a268",
  storageBucket: "pc-doctor-8a268.appspot.com",
  messagingSenderId: "1087972958288",
  appId: "1:1087972958288:web:ff6fdabf8d3c38e33e3155"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;