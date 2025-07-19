import { initializeApp } from "firebase/app";
import { FirebaseStorage, getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAHV4FAadpXA-jVmuSMoiBtuwP12qvRuMA",
  authDomain: "fir-project-smit-4f427.firebaseapp.com",
  databaseURL: "https://fir-project-smit-4f427-default-rtdb.firebaseio.com",
  projectId: "fir-project-smit-4f427",
  storageBucket: "fir-project-smit-4f427.appspot.com",
  messagingSenderId: "838624561487",
  appId: "1:838624561487:web:a1422c263e3b68962a9d3a"
};



const app = initializeApp(firebaseConfig);
const storage  = getStorage(app);

export { storage };


