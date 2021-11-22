import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyACHIrsr5xehI-vi_laKOzKKQ28yUpaaNI",
    authDomain: "hackathon-36805.firebaseapp.com",
    projectId: "hackathon-36805",
    storageBucket: "hackathon-36805.appspot.com",
    messagingSenderId: "156334094871",
    appId: "1:156334094871:web:760ee8d0a06e5cb37aba52"
  };

  const fire = firebase.initializeApp(firebaseConfig);

export default fire;
