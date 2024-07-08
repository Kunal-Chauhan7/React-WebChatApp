import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA5xoQ5-fpg8gr024ceSx3JpmU1Y8F2F58",
  authDomain: "reactchat-add6f.firebaseapp.com",
  projectId: "reactchat-add6f",
  storageBucket: "reactchat-add6f.appspot.com",
  messagingSenderId: "453477537311",
  appId: "1:453477537311:web:2f29d701ae44f23821e72a"
};
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()