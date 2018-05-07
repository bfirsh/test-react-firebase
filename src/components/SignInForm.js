import React from "react";
import { withFirebase } from "react-redux-firebase";
import { Form, FormGroup, Alert, Label, Input, Button } from "reactstrap";

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.firebase
      .login({ email, password })
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
      <Form onSubmit={this.onSubmit}>
        {this.state.error && (
          <Alert color="danger">{this.state.error.message}</Alert>
        )}
        <FormGroup>
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Input
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">Sign In</Button>
      </Form>
    );
  }
}

export default withFirebase(SignInForm);
