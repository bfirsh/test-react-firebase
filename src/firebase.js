import * as firebase from "firebase";

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
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
