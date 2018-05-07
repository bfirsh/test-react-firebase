import React from "react";

class AddProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Name</label>
        <input
          name="name"
          type="text"
          value={this.state.name}
          onChange={this.onInputChange}
        />
        <button type="submit">Add</button>
      </form>
    );
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
}

export default AddProductForm;
