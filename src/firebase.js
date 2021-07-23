import firebase from "firebase/app";
import "firebase/firestore";



var firebaseConfig = {
    apiKey: "AIzaSyBUYPO1EWI5WaK3FjJjbMntbGbAQzH4k0Q",
    authDomain: "tick-tack-toes.firebaseapp.com",
    projectId: "tick-tack-toes",
    storageBucket: "tick-tack-toes.appspot.com",
    messagingSenderId: "8857847459",
    appId: "1:8857847459:web:f63dde22b3461e64346116",
    measurementId: "G-N69K70JZM3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export let db = firebase.firestore();