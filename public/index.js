// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDDE20mSeMxHVWzeuBQ4w27J7k980hUo0k",
authDomain: "noted-7e397.firebaseapp.com",
projectId: "noted-7e397",
storageBucket: "noted-7e397.appspot.com",
messagingSenderId: "281685557158",
appId: "1:281685557158:web:f355736caaaae5b0ca1967",
measurementId: "G-SQGNSVGBNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);