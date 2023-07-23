import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCWcZvRY0OomWkDFjIaIvhhtQ9UaJbC04Q",
  authDomain: "update-project-d8e66.firebaseapp.com",
  databaseURL: "https://update-project-d8e66-default-rtdb.firebaseio.com",
  projectId: "update-project-d8e66",
  storageBucket: "update-project-d8e66.appspot.com",
  messagingSenderId: "359877126507",
  appId: "1:359877126507:web:e6aa296f5d60692483842e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
