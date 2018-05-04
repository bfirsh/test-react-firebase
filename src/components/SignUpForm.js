import React from "react";
import { auth } from "../firebase";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    auth
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(user => {
        this.props.onSuccess(user);
      })
      .catch(error => {
        this.setState({ error: error });
      });
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        {this.state.error && <p>{this.state.error.message}</p>}
        <label>Email</label>
        <input
          name="email"
          type="email"
          value={this.state.email}
          onChange={this.onInputChange}
        />
        <label>Password</label>
        <input
          name="password"
          type="password"
          value={this.state.password}
          onChange={this.onInputChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    );
  }
}

export default SignUpForm;