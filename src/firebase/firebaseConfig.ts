import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyABozcUs2_THSeujngIErJOxJO8eQDDYBw",
  authDomain: "e-commerce-project-263ba.firebaseapp.com",
  databaseURL: "https://e-commerce-project-263ba-default-rtdb.firebaseio.com",
  projectId: "e-commerce-project-263ba",
  storageBucket: "e-commerce-project-263ba.appspot.com",
  messagingSenderId: "1068346666812",
  appId: "1:1068346666812:web:8a95623f0a81be29333839"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { database as default };
