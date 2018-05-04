import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import AuthUserContext from "./AuthUserContext";
import SignOutButton from "./SignOutButton";

const NavigationAuthed = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/account">Account</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNotAuthed = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/signup">Sign Up</Link>
    </li>
    <li>
      <Link to="/signin">Sign In</Link>
    </li>
  </ul>
);

const Navigation = ({ authUser }) => {
  if (authUser) {
    return <NavigationAuthed />;
  } else {
    return <NavigationNotAuthed />;
  }
};

const mapStateToProps = state => ({
  authUser: state.sessionState.authUser
});

export default connect(mapStateToProps)(Navigation);
