// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBIk7akQ0ifdOFVqW1B7W_xSjxKkULbs_8",
    authDomain: "continental-table.firebaseapp.com",
    projectId: "continental-table",
    storageBucket: "continental-table.appspot.com",
    messagingSenderId: "373189604829",
    appId: "1:373189604829:web:de0ea07288f9cd46f5f234"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;