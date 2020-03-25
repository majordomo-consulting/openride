import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

const firebaseConfig = {
// -------------- COPY CREDENTIALS HERE ---------------
    apiKey: "AIzaSyCtR1xdkAJ-n3QgRkL93xwy3-Buku8It7Q",
    authDomain: "openride-io.firebaseapp.com",
    databaseURL: "https://openride-io.firebaseio.com",
    projectId: "openride-io",
    storageBucket: "openride-io.appspot.com",
    messagingSenderId: "666416682193",
    appId: "1:666416682193:web:dc4a259fd0c85faba061f0",
    measurementId: "G-WHCVT6J6PS"
};
// --------------- COPY CREDENTIALS HERE ---------------

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubscribe = firebase.auth().onAuthStateChanged(user => {
            unsubscribe();
            resolve(user);
        }, reject);
    })
};

export default firebase;