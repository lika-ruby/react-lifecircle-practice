import { Component } from "react";
import { Form, Input } from "./Filter.js";

export class Filter extends Component {
  handleChange = (e) => {
    this.props.setFilter(e.target.value);
  };

  render() {
    return (
      <Form>
        <Input
          type="text"
          name="todo-filter"
          value={this.props.filter}
          onChange={this.handleChange}
          placeholder="Find you text"
        />
      </Form>
    );
  }
}
