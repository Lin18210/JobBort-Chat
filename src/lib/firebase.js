import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAaDqItvdfk29ji-Mj0pLEH27hiqT4J2ak",
    authDomain: "jobbort-b0e97.firebaseapp.com",
    projectId: "jobbort-b0e97",
    storageBucket: "jobbort-b0e97.appspot.com",
    messagingSenderId: "793541075191",
    appId: "1:793541075191:web:5ea1dbdc20129e7b7933f2"
};

console.log(firebaseConfig);


const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()