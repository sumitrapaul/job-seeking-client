import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

const all = import.meta.env;
const firebaseConfig = {
  apiKey:all.VITE_apiKey,
  authDomain:all.VITE_authDomain,
  projectId:all.VITE_projectId,
  storageBucket:all.VITE_storageBucket,
  messagingSenderId:all.VITE_messagingSenderId,
  appId:all.VITE_appId,
};

const app = initializeApp(firebaseConfig);
export default app;
