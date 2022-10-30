import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDe-YDXgtW7SRQlbts87eFT5UVYI7_gn6I",
  authDomain: "argenestim.firebaseapp.com",
  projectId: "argenestim",
  storageBucket: "argenestim.appspot.com",
  messagingSenderId: "827315073891",
  appId: "1:827315073891:web:c92939d916830f82685956"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

/* vinculamos el proyecto con la data base correspondiente a este */