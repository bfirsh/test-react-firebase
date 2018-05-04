import React from "react";
import { withFirebase } from "react-redux-firebase";

const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={() => firebase.logout()}>
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
