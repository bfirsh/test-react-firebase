import { createStore, compose } from "redux";
import { reactReduxFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";
import firebase from "../firebase";
import rootReducer from "../reducers";

const reactReduxConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
  enableLogging: false
};

// Add redux Firebase to compose
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, reactReduxConfig),
  reduxFirestore(firebase)
)(createStore);

// Create store with reducers and initial state
const store = createStoreWithFirebase(rootReducer);

export default store;
