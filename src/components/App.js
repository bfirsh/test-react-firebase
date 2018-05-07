import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./Navigation";
import HomePage from "./HomePage";
import ProductsPage from "./ProductsPage";
import SignUpPage from "./SignUpPage";
import SignInPage from "./SignInPage";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />

          <hr />

          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/products" component={() => <ProductsPage />} />
          <Route exact path="/signup" component={() => <SignUpPage />} />
          <Route exact path="/signin" component={() => <SignInPage />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
