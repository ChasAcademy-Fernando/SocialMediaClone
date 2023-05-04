import firebase from "firebase"
import "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDhraoDaa1nX0Kom178XGtdPLUV9ee_PBA",
    authDomain: "socialmediaclone-fb-1.firebaseapp.com",
    projectId: "socialmediaclone-fb-1",
    storageBucket: "socialmediaclone-fb-1.appspot.com",
    messagingSenderId: "554894651974",
    appId: "1:554894651974:web:61498cbff5e490f6671047"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();

  const db = app.firestore();
  const storage = firebase.storage();

  export {db , storage}