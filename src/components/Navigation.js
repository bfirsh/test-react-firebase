import React from "react";
import { connect } from "react-redux";
import { isLoaded, isEmpty } from "react-redux-firebase";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";

class Navigation extends React.Component {
  render() {
    const { profile, auth } = this.props;
    const dataLoaded = isLoaded(auth, profile);
    const authExists = isLoaded(auth) && !isEmpty(auth);

    if (!dataLoaded) {
      return <div>Loading...</div>;
    }

    if (authExists) {
      return (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      );
    } else {
      return (
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
    }
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default connect(mapStateToProps)(Navigation);
