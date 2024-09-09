import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfk_ygkDnILRH90nLovh_j1dX47DljiH4",
  authDomain: "tes-soal-online.firebaseapp.com",
  projectId: "tes-soal-online",
  storageBucket: "tes-soal-online.appspot.com",
  messagingSenderId: "505902185404",
  appId: "1:505902185404:web:13d1037b1d80c142e8c9b9",
  measurementId: "G-JESDJMBVVM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };