import React from "react";
import { Container, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

import SignInForm from "./SignInForm";

const SignInPage = ({ history }) => (
  <Container>
    <Row className="mb-4">
      <h1>Sign In</h1>
    </Row>
    <Row>
      <SignInForm onSuccess={user => history.push("/")} />
    </Row>
  </Container>
);

export default withRouter(SignInPage);
