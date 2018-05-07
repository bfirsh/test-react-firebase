import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";
import { Container, Row, Col } from "reactstrap";

const HomePage = ({ auth }) => (
  <Container>
    <Row className="mb-4">
      <h1>React + Auth Test</h1>
    </Row>
    <Row>
      {isEmpty(auth) ? (
        <p>You are not logged in.</p>
      ) : (
        <p>You are logged in as {auth.email}.</p>
      )}
    </Row>
  </Container>
);

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(HomePage);
