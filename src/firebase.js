import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBhcXbO03xA35WYAp1SIHYhwNNZEfCLN4",
  authDomain: "ticket-management-7569f.firebaseapp.com",
  projectId: "ticket-management-7569f",
  storageBucket: "ticket-management-7569f.appspot.com",
  messagingSenderId: "372135610455",
  appId: "1:372135610455:web:14c1f902d8c56e3be33b12",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
