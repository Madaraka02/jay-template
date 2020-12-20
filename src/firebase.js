  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAs-rPhvlWhBGUr2XgRyRxPNkQCVG7KOWA",
    authDomain: "trendy-aabc5.firebaseapp.com",
    databaseURL: "https://trendy-aabc5.firebaseio.com",
    projectId: "trendy-aabc5",
    storageBucket: "trendy-aabc5.appspot.com",
    messagingSenderId: "1063699987810",
    appId: "1:1063699987810:web:a670850598e14e57d1403b",
    measurementId: "G-BSQ7VXVHR7"
  
  });

  const db = firebaseApp.firestore();

  export default db;