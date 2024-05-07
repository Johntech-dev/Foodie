// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBF6ajpWqNqAoVo71GrMoLmRKWabYR3R2I",
  authDomain: "foodie-cli.firebaseapp.com",
  projectId: "foodie-cli",
  storageBucket: "foodie-cli.appspot.com",
  messagingSenderId: "521593950822",
  appId: "1:521593950822:web:e2b2cb76b081d6c0b1d3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;