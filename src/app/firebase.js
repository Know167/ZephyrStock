import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: "zephyrstock-bad9d.firebaseapp.com",
    projectId: "zephyrstock-bad9d",
    storageBucket: "zephyrstock-bad9d.appspot.com",
    messagingSenderId: "365186959146",
    appId: "1:365186959146:web:0fb13b2bfc727cbdcec053",
    measurementId: "G-ZC93Y5ESH4",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };
