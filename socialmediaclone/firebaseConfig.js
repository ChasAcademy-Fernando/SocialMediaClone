import {initializeApp,getApps,getApp} from "firebase/app"
import {getFirestore} from "firebase/firestore" 
import {getStorage} from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyDhraoDaa1nX0Kom178XGtdPLUV9ee_PBA",
    authDomain: "socialmediaclone-fb-1.firebaseapp.com",
    projectId: "socialmediaclone-fb-1",
    storageBucket: "socialmediaclone-fb-1.appspot.com",
    messagingSenderId: "554894651974",
    appId: "1:554894651974:web:61498cbff5e490f6671047"
  };

  const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

  const db = getFirestore(app);
  const storage = getStorage(app)
  
  export {db, storage}