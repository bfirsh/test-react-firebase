import firebase from "firebase";
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDcHCIuuZoiTArp0s6qmY8sDObrR3qneHI",
  authDomain: "test-react-firebase-cf1d7.firebaseapp.com",
  databaseURL: "https://test-react-firebase-cf1d7.firebaseio.com",
  projectId: "test-react-firebase-cf1d7",
  storageBucket: "",
  messagingSenderId: "129444191113"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase.firestore();
}

export default firebase;
