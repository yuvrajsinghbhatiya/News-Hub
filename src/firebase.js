
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCsbMrozAyn5XZccq8JLGQv73LBTRMFT9A",
    authDomain: "news-hub-6011f.firebaseapp.com",
    databaseURL: "https://news-hub-6011f-default-rtdb.firebaseio.com",
    projectId: "news-hub-6011f",
    storageBucket: "news-hub-6011f.appspot.com",
    messagingSenderId: "328318215233",
    appId: "1:328318215233:web:a82f3694bc20499a3e52c0",
    measurementId: "G-JJ31G5K7YS"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export default app;
