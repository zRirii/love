import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics"; // Include this line if you plan to use analytics

const firebaseConfig = {
  apiKey: "AIzaSyDXAVUE0qNPGFddEDFs2e45T6HxBXLqJ7M",
  authDomain: "love-716c7.firebaseapp.com",
  projectId: "love-716c7",
  storageBucket: "love-716c7.appspot.com",
  messagingSenderId: "213943771565",
  appId: "1:213943771565:web:01fcd9f96289866c2d0124",
  measurementId: "G-B4GWJ1JR2V"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app); // Include this line if you plan to use analytics

export { app, db, auth, analytics };