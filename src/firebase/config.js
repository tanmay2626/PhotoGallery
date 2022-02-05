import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore, serverTimestamp, Timestamp } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCN7J__wcpvEU-BcxpP42iWaUiylqn5CzA",
    authDomain: "tanmay-tamgram.firebaseapp.com",
    projectId: "tanmay-tamgram",
    storageBucket: "tanmay-tamgram.appspot.com",
    messagingSenderId: "271038441846",
    appId: "1:271038441846:web:3cca1be152c09a46e47257"
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage();
const myFirestore = getFirestore(app);
const timestamp = serverTimestamp();
const dTimeStamp = Timestamp.now();

export { app , storage ,myFirestore , timestamp , dTimeStamp } ;

