import React from "react";
import { connect } from "react-redux";
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from "reactstrap";
import { withFirebase, isLoaded, isEmpty } from "react-redux-firebase";
import { Link } from "react-router-dom";
import { compose } from "recompose";

class Navigation extends React.Component {
  render() {
    const { firebase, profile, auth } = this.props;
    const dataLoaded = isLoaded(auth, profile);
    const authExists = isLoaded(auth) && !isEmpty(auth);

    if (!dataLoaded) {
      return (
        <Nav className="ml-auto" navbar>
          Loading...
        </Nav>
      );
    }

    if (authExists) {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/products">
              Products
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={() => firebase.logout()}>
              Sign out
            </NavLink>
          </NavItem>
        </Nav>
      );
    } else {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink tag={Link} to="/">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signup">
              Sign Up
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to="/signin">
              Sign In
            </NavLink>
          </NavItem>
        </Nav>
      );
    }
  }
}

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default compose(withFirebase, connect(mapStateToProps))(Navigation);
