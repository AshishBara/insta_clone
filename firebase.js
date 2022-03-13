// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhUtihhiwN_NFe5zSh-SNtbxOrT54TqTs",
  authDomain: "insta-clone-09.firebaseapp.com",
  projectId: "insta-clone-09",
  storageBucket: "insta-clone-09.appspot.com",
  messagingSenderId: "412883622744",
  appId: "1:412883622744:web:44ab859b044b6383b4a32d"
};

// Initialize Firebase
const app = !getApps().lenght ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };