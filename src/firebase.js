import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: 'AIzaSyAprP7N33fvNoeCM40cpMrm3lvJPnPSxZE',
  authDomain: 'ivan-practice-eating.firebaseapp.com',
  projectId: 'ivan-practice-eating',
  storageBucket: 'ivan-practice-eating.appspot.com',
  messagingSenderId: '520917585308',
  appId: '1:520917585308:web:14dc3d5295454c51fc0c59',
  measurementId: 'G-6Q9CG4FQ6P'
};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};
export const auth = firebase.auth();
export const storage = firebase.storage();
export const firestore = firebase.firestore();