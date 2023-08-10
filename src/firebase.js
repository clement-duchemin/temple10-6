// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtYc_0v4b32qD-aQ5WPUWIzLXV9-GjnuE",
  authDomain: "temple10-6.firebaseapp.com",
  projectId: "temple10-6",
  storageBucket: "temple10-6.appspot.com",
  messagingSenderId: "973818658499",
  appId: "1:973818658499:web:318443e752f6d50b84ec76",
  measurementId: "G-8EKBJLV4FP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
//const analytics = getAnalytics(app);