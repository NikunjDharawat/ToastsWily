import * as firebase from 'firebase';
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB8KSSeyHEwxTQiFsHnYVpNTcebXKq-LQc",
    authDomain: "wily-app-89f6d.firebaseapp.com",
    databaseURL: "https://wily-app-89f6d-default-rtdb.firebaseio.com",
    projectId: "wily-app-89f6d",
    storageBucket: "wily-app-89f6d.appspot.com",
    messagingSenderId: "882968482768",
    appId: "1:882968482768:web:2daeb2ca213501c12d5fd5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  export default firebase.firestore()