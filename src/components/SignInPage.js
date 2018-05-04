import React from "react";
import SignInForm from "./SignInForm";
import { withRouter } from "react-router-dom";

const SignUpPage = ({ history }) => (
  <div>
    <h1>Sign In</h1>
    <SignInForm onSuccess={user => history.push("/")} />
  </div>
);

export default withRouter(SignUpPage);
