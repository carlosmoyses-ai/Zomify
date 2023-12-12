import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDP4ae0yQDo1HHZpp2qcDCZ9xCGr1Yf8s4",
  authDomain: "zomify-2.firebaseapp.com",
  projectId: "zomify-2",
  storageBucket: "zomify-2.appspot.com",
  messagingSenderId: "1018712168688",
  appId: "1:1018712168688:web:bc6a3fb232d511f9088a35"
};

const firebase = initializeApp(config);

export { firebase };
