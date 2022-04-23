// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzVoD_dUWlZeQuLQ8PeztzVdQKYMWK95o",
  authDomain: "genius-car-service-19246.firebaseapp.com",
  projectId: "genius-car-service-19246",
  storageBucket: "genius-car-service-19246.appspot.com",
  messagingSenderId: "778963897850",
  appId: "1:778963897850:web:7000449d8301a46bbe2843",
  measurementId: "G-1B9DK6MGKN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app)

export default auth;
