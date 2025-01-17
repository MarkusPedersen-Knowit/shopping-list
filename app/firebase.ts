// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtpzcEnoywFR7cseczOI0pvMESODA2sjQ",
  authDomain: "shopping-list-a16e4.firebaseapp.com",
  projectId: "shopping-list-a16e4",
  storageBucket: "shopping-list-a16e4.appspot.com", 
  messagingSenderId: "876688845077",
  appId: "1:876688845077:web:c21a4498bb569cd11e611c",
  measurementId: "G-7L51H630S1"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
