// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4gfnKhzUFB1K2kxKZBuzysq0ZpZgg7yY",
  authDomain: "technexa-eef36.firebaseapp.com",
  projectId: "technexa-eef36",
  storageBucket: "technexa-eef36.appspot.com",
  messagingSenderId: "162910740914",
  appId: "1:162910740914:web:4a0c3fd9d7ab6d507b84ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app