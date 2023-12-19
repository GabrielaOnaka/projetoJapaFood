// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {query, getDocs, collection, where, addDoc} from "firebase/firestore"
import {getStorage} from "firebase/storage";

// import {auth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBg9sVOvYWvp5h-wTAqB5ea_AxfriKCULc",
  authDomain: "japafood-38cdc.firebaseapp.com",
  databaseURL: "https://japafood-38cdc-default-rtdb.firebaseio.com",
  projectId: "japafood-38cdc",
  storageBucket: "japafood-38cdc.appspot.com",
  messagingSenderId: "653721063280",
  appId: "1:653721063280:web:0b767afb6e26d9a8a049b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

const logout = () => {
  signOut(auth);
};
export{
  auth,
  logout,
  storage
};

// FireStore
export const db = getFirestore(app);