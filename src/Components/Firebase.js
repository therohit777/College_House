import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyAifnxSAEF8dlMXPx-9Ra89GL2EjfG75bE",
    authDomain: "collegehouse-ae4c6.firebaseapp.com",
    projectId: "collegehouse-ae4c6",
    storageBucket: "collegehouse-ae4c6.appspot.com",
    messagingSenderId: "1003517793936",
    appId: "1:1003517793936:web:f8df8af3a47004458a6a15",
    measurementId: "G-8H3MSN8CX2"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


export {auth};
export default db;