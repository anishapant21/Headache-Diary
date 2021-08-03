 // Your web app's Firebase configuration
 import firebase from "firebase";
 
 var firebaseConfig = {
    apiKey: "AIzaSyC1tKCj1FmxgrJAeBRvHO9OIk1MIMpO73A",
    authDomain: "headachediary-34ced.firebaseapp.com",
    projectId: "headachediary-34ced",
    storageBucket: "headachediary-34ced.appspot.com",
    messagingSenderId: "121571143694",
    appId: "1:121571143694:web:b14cd1ec00c17b024c4c5f"
  };
  // Initialize Firebase
  const fire= firebase.initializeApp(firebaseConfig);
  export default fire;