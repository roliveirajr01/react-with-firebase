import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoReT9yrZthuTL-gwpi82-E--4UP0hIyI",
    authDomain: "surfboard-3643f.firebaseapp.com",
    projectId: "surfboard-3643f",
    storageBucket: "surfboard-3643f.appspot.com",
    messagingSenderId: "267138708633",
    appId: "1:267138708633:web:297f769cd17d273f8bb408"
  };

  export const firebaseApp = firebase.initializeApp(firebaseConfig);
  export const database = firebaseApp.firestore();