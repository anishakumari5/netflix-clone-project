// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsQhhIQDuBItX-iTF9kAwrmr-ywvzx2No",
  authDomain: "netflix-clone-32bd4.firebaseapp.com",
  projectId: "netflix-clone-32bd4",
  storageBucket: "netflix-clone-32bd4.appspot.com",
  messagingSenderId: "1080682763748",
  appId: "1:1080682763748:web:b32eb9bab7a94c015623f1",
  measurementId: "G-S2CH3T7XSZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
