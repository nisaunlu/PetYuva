import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJnhnwUEulLE8KAiXlGqzJ_WxsyWiRmCo",
  authDomain: "petyuva-e2b11.firebaseapp.com",
  projectId: "petyuva-e2b11",
  storageBucket: "petyuva-e2b11.appspot.com",
  messagingSenderId: "1034885972898",
  appId: "1:1034885972898:web:765895ad6fcad99cc4a8fb",
  measurementId: "G-NJ7QZZ2RY3"
};

// Eğer Firebase zaten başlatılmışsa tekrar başlatma
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

