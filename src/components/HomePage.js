import React from "react";
import { connect } from "react-redux";

const HomePage = ({ auth }) => (
  <div>
    <h1>React + Auth Test</h1>
    <p>Hello {auth.email}</p>
  </div>
);

const mapStateToProps = state => ({
  auth: state.firebase.auth
});

export default connect(mapStateToProps)(HomePage);
