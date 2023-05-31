// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1EEdBfdArtmwtz8bbddeqGDvaeUrexy0",
  authDomain: "house-marketplace-app-72379.firebaseapp.com",
  projectId: "house-marketplace-app-72379",
  storageBucket: "house-marketplace-app-72379.appspot.com",
  messagingSenderId: "382039334201",
  appId: "1:382039334201:web:68f4c717cb9e96404b1ce8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()