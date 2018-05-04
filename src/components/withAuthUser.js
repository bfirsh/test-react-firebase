import React from "react";
import { connect } from "react-redux";

import AuthUserContext from "./AuthUserContext";
import { auth } from "../firebase";

const withAuthUser = Component => {
  class WithAuthUser extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        authUser: null
      };
    }

    componentDidMount() {
      auth.onAuthStateChanged(this.props.onSetAuthUser);
    }

    render() {
      return <Component />;
    }
  }

  const mapDispatchToProps = dispatch => ({
    onSetAuthUser: authUser => dispatch({ type: "AUTH_USER_SET", authUser })
  });

  return connect(null, mapDispatchToProps)(WithAuthUser);
};

export default withAuthUser;
