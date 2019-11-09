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
    apiKey: XXXXXXXXXXXXXXXXXXXXXXX,
    authDomain: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
    databaseURL: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
    projectId: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX,
    storageBucket: XXXXXXXXXXXXXXXXXXXXXXXXXXXX,
    messagingSenderId: XXXXXXXXXXXXXXXXXXXXXXXXXXXX,
    appId: XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
  };

  firebase.initializeApp(firebaseConfig);
  
  const database = firebase.database();

  export {database}
