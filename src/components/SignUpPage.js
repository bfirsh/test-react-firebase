import React from "react";
import { Container, Row } from "reactstrap";
import { withRouter } from "react-router-dom";

import SignUpForm from "./SignUpForm";

const SignUpPage = ({ history }) => (
  <Container>
    <Row className="mb-4">
      <h1>Sign Up</h1>
    </Row>
    <Row>
      <SignUpForm onSuccess={user => history.push("/")} />
    </Row>
  </Container>
);

export default withRouter(SignUpPage);
