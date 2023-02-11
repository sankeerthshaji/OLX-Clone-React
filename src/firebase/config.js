import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCZ5mj5sUv-fInAjt1aJYxhWhDe_a3cxRE",
  authDomain: "fir-65cf8.firebaseapp.com",
  projectId: "fir-65cf8",
  storageBucket: "fir-65cf8.appspot.com",
  messagingSenderId: "930357628509",
  appId: "1:930357628509:web:55ebd5b6f40dde3959c7b4",
  measurementId: "G-MCQWHFW6LV"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);


