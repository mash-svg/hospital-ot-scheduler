// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js";
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDPk_9y9xNje_U5wf8Zf8gwUykOwrBtk-c",
  authDomain: "surgical-scheduling-system.firebaseapp.com",
  projectId: "surgical-scheduling-system",
  storageBucket: "surgical-scheduling-system.appspot.com",
  messagingSenderId: "96783731201",
  appId: "1:96783731201:web:99ebc26f97f84f250a8e00"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  auth, signInWithEmailAndPassword, signOut,
  db, collection, addDoc, getDocs, onSnapshot, query, orderBy,
  storage, ref, uploadBytes, getDownloadURL
};
