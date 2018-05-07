import React from "react";
import { Form, FormGroup, Alert, Label, Input, Button } from "reactstrap";

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Add
        </Button>
      </Form>
    );
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

export default AddProductForm;
