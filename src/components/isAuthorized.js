import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";

import AuthUserContext from "./AuthUserContext";
import { auth } from "../firebase";

const isAuthorized = () => Component => {
  class IsAuthorized extends React.Component {
    componentDidMount() {
      auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push("/signin");
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }
  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser
  });

  return compose(withRouter, connect(mapStateToProps))(IsAuthorized);
};

export default isAuthorized;
