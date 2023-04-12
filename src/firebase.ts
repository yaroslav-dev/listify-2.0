import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDTIda0nsAIldkPNk6vRoL7IPse4L7NVMg",
  authDomain: "listify-v2.firebaseapp.com",
  projectId: "listify-v2",
  storageBucket: "listify-v2.appspot.com",
  messagingSenderId: "927463433227",
  appId: "1:927463433227:web:a0d94a59566a8b16d2930e",
  measurementId: "G-30WR1BN041"
};

export const firebaseApp = initializeApp(firebaseConfig)

export const analytics = getAnalytics(firebaseApp);

const db = getFirestore(firebaseApp)

export const listsRef = collection(db, 'lists')