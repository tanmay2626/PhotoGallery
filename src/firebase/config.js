import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
import { getFirestore, serverTimestamp, Timestamp } from 'firebase/firestore'

const firebaseConfig = {
  //Add Your credentials
  };

const app = initializeApp(firebaseConfig);

const storage = getStorage();
const myFirestore = getFirestore(app);
const timestamp = serverTimestamp();
const dTimeStamp = Timestamp.now();

export { app , storage ,myFirestore , timestamp , dTimeStamp } ;

