import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";
import withAuthUser from "./withAuthUser";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <hr />

          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/signup" component={() => <SignUpPage />} />
          <Route exact path="/signin" component={() => <SignInPage />} />
        </div>
      </BrowserRouter>
    );
  }
}

// <Route
//   exact
//   path="/account/forgotten-password"
//   component={() => <PasswordForgetPage />}
// />
// <Route exact path="/home" component={() => <HomePage />} />
// <Route exact path="/account" component={() => <AccountPage />} />
export default withAuthUser(App);
