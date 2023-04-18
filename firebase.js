import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';

const firebaseConfig = {
  // Aquí debes agregar las credenciales de tu proyecto de Firebase'
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }


const app = initializeApp(firebaseConfig);
// Export firestore database
// It will be imported into your react app whenever it is needed
export const db = getFirestore(app);
