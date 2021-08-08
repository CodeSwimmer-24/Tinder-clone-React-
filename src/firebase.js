import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBvJyVA7Eu5opgVKVZ-Gpw7DXV-V3sV6kw",
  authDomain: "tinder-clone-52ec7.firebaseapp.com",
  projectId: "tinder-clone-52ec7",
  storageBucket: "tinder-clone-52ec7.appspot.com",
  messagingSenderId: "526972745988",
  appId: "1:526972745988:web:f1672a5e80a2812f263851",
  measurementId: "G-99LCZBLX9R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
