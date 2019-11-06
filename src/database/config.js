/*
*Problem:- FIREBASE WARNING: update at /posts failed: permission_denied
*Solution:-
*          Go to database, next to title there are 2 options:
*          Cloud Firestore, Realtime database
*          Select Realtime database and go to rules
*          change rules to true.
*          This solved my problem.
*/
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBVGTOP-Bgp3GDtfOvZcgK149Z6wE1MsAM",
    authDomain: "photowall-97b6b.firebaseapp.com",
    databaseURL: "https://photowall-97b6b.firebaseio.com",
    projectId: "photowall-97b6b",
    storageBucket: "photowall-97b6b.appspot.com",
    messagingSenderId: "299902947554",
    appId: "1:299902947554:web:8e0141f9e88716660dcebb"
  };

  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();

  export {database}