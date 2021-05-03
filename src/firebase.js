import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB-o9DAjNYOUj9zJO6T5jKLxnw9BlDW4mc",
    authDomain: "superchat-313e4.firebaseapp.com",
    projectId: "superchat-313e4",
    storageBucket: "superchat-313e4.appspot.com",
    messagingSenderId: "144627506932",
    appId: "1:144627506932:web:489649467878e2a2bd48a1",
    measurementId: "G-LVKLLPE83T"
  };
  // Initialize Firebase



  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;