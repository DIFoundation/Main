import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDcnWdYX_TmTq3DH_do-oSmY8O3n48VlDI",
  authDomain: "gowithfund-5c3fe.firebaseapp.com",
  projectId: "gowithfund-5c3fe",
  storageBucket: "gowithfund-5c3fe.firebasestorage.app",
  messagingSenderId: "460186670950",
  appId: "1:460186670950:web:9ce24b706f27888c691aa7",
  measurementId: "G-BRT2HG5XJJ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
