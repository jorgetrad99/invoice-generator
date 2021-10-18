import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
/* import { process } from 'node-loader'; */

const firebaseConfig = {
  apiKey: process.env.APP_FIREBASE_APIKEY,
  authDomain: process.env.APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.APP_FIREBASE_PROJECTID,
  storageBucket: process.env.APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.APP_FIREBASE_MESSAGINSENDERID,
  appId: process.env.APP_FIREBASE_APPID,
  measurementId: process.env.APP_FIREBASE_MEASURMENTID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* const querySnapshot = await getDocs(collection(db, "products"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
}); */
/*
async function getProducts(db) {
  const productDoc = doc(db, `products`);
  const snapshot = await getDoc(productDoc);
  return snapshot;
} */

export { db };
