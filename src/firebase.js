  import firebase from 'firebase/app';
  import 'firebase/firestore';
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAwJE4gBlX6PW60ixO6eyUpWUrv5K3cgnY",
    authDomain: "product-serempre-test.firebaseapp.com",
    projectId: "product-serempre-test",
    storageBucket: "product-serempre-test.appspot.com",
    messagingSenderId: "675038085671",
    appId: "1:675038085671:web:760f2e3ae1f3d30d404402"
  };
  // Initialize Firebase
  const fb= firebase.initializeApp(firebaseConfig);
  export const db = fb.firestore() ;