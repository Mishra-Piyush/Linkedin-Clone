import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";
import { ref } from "@firebase/storage";
// import { ref } from "@firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDAEyY3i9AJ47-U-2Vngfd_-hAVYYco6W4",
  authDomain: "linkdin-clone-791e8.firebaseapp.com",
  projectId: "linkdin-clone-791e8",
  storageBucket: "linkdin-clone-791e8.appspot.com",
  messagingSenderId: "507234029211",
  appId: "1:507234029211:web:31b069ce6bd8b150fb003e",
  measurementId: "G-04T646P35Y",
};

// this will add our front to backend

const firebaseApp = firebase.initializeApp(firebaseConfig);
// initializeApp(firebaseConfig);

// to established database
const db = firebaseApp.firestore();

// for Authentications
const auth = firebase.auth();

// provider

var provider = new firebase.auth.GoogleAuthProvider();

const storage = getStorage(firebaseApp);
const storageRef = ref(storage);
export { db, auth, provider, storage, firebase, storageRef };
