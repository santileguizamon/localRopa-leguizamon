// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzNq3fSffMfV1f0SrYDflyVa-QSQlUaf4",
  authDomain: "coderhouse-ecommerce-578a2.firebaseapp.com",
  projectId: "coderhouse-ecommerce-578a2",
  storageBucket: "coderhouse-ecommerce-578a2.appspot.com",
  messagingSenderId: "667209172145",
  appId: "1:667209172145:web:61c593b603ed76cf7b4e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);