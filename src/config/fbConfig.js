import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjNJKLmNXQMocrp1B83IB9BzeMDJs-8nk",
    authDomain: "react-project-plan-59fc2.firebaseapp.com",
    databaseURL: "https://react-project-plan-59fc2.firebaseio.com",
    projectId: "react-project-plan-59fc2",
    storageBucket: "",
    messagingSenderId: "406529987015",
    appId: "1:406529987015:web:17350d1282add249"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({})

  export default firebase;