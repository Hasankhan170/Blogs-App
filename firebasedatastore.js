import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCQjs5K1A71oCIaVZFwnZAoPkrQLTGuhWw",
  authDomain: "blog-app-4d8fe.firebaseapp.com",
  projectId: "blog-app-4d8fe",
  storageBucket: "blog-app-4d8fe.appspot.com",
  messagingSenderId: "1028963200995",
  appId: "1:1028963200995:web:bb06059fac8aab66543ad6",
  measurementId: "G-3EC2MLJCJY"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)