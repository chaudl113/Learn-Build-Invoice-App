import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCP4HpfDDJcHwtZoGO7opcSyEwJPiDwuTc",
    authDomain: "invoice-app-569eb.firebaseapp.com",
    projectId: "invoice-app-569eb",
    storageBucket: "invoice-app-569eb.appspot.com",
    messagingSenderId: "217999286122",
    appId: "1:217999286122:web:9895a2d830727c2e83cf13"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore();