import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBcRBjVudGAuSD_MCMvbl8IlLIZp-b9Xu8",
    authDomain: "lista-pizzas.firebaseapp.com",
    projectId: "lista-pizzas",
    storageBucket: "lista-pizzas.appspot.com",
    messagingSenderId: "1088105276411",
    appId: "1:1088105276411:web:4f6c4a8a9188cbba08215e"
  };
  let app = firebase.initializeApp(firebaseConfig);
  export const db  = firebase.firestore()//app.database();