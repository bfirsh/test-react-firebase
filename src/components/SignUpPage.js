import React from "react";
import SignUpForm from "./SignUpForm";
import { withRouter } from "react-router-dom";

const SignUpPage = ({ history }) => (
  <div>
    <h1>Sign Up</h1>
    <SignUpForm onSuccess={user => history.push("/")} />
  </div>
);

export default withRouter(SignUpPage);
