
import firebase from 'firebase/app';
import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB9qPjySStdshYmRfshyeUdo1kEB7RgZ-s",
    authDomain: "fireb-demo-7ed7b.firebaseapp.com",
    databaseURL: "https://fireb-demo-7ed7b.firebaseio.com",
    projectId: "fireb-demo-7ed7b",
    storageBucket: "",
    messagingSenderId: "573720415132",
    appId: "1:573720415132:web:a7df7c80df4e20f3"
};

 // Initialize Firebase
const firebaseInit = firebase.initializeApp(firebaseConfig);

export default firebase

export  { firebaseInit }



