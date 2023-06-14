import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANfPQHzpunYs_p94xNAZyl8n8ObZumbo4",
  authDomain: "miniblog-c8316.firebaseapp.com",
  projectId: "miniblog-c8316",
  storageBucket: "miniblog-c8316.appspot.com",
  messagingSenderId: "760661106616",
  appId: "1:760661106616:web:1390190cb488bb54f3794d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };