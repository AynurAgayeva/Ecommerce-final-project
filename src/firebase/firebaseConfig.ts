import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCv0R4IjeF9g89R0oRsvLMS5ricnty3Jl8",
  authDomain: "ollis-project.firebaseapp.com",
  databaseURL: "https://ollis-project-default-rtdb.firebaseio.com",
  projectId: "ollis-project",
  storageBucket: "ollis-project.appspot.com",
  messagingSenderId: "225429164453",
  appId: "1:225429164453:web:e87a09081217d24fd3d84c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
