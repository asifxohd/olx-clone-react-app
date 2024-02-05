import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import {getFirestore} from "@firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAyhomIiYzlgk9SNw042YQkVqZJ4z244LQ",
  authDomain: "olx---clone-d468d.firebaseapp.com",
  projectId: "olx---clone-d468d",
  storageBucket: "olx---clone-d468d.appspot.com",
  messagingSenderId: "228999650466",
  appId: "1:228999650466:web:6c4f3013f60d15003dcbfb"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const db = getFirestore(app)
export default app;