import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/analytics'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDIzVrZi6gvF1wnpa1BJI1rc0PD_Pc7OTM",
  authDomain: "moon-light-23644.firebaseapp.com",
  databaseURL: "https://moon-light-23644.firebaseio.com",
  projectId: "moon-light-23644",
  storageBucket: "moon-light-23644.appspot.com",
  messagingSenderId: "396127344",
  appId: "1:396127344:web:3b99319ee4f74f679fd8b5",
  measurementId: "G-HQ1NL9DDT1"
};
// Initialize Firebase

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebaseApp.auth()