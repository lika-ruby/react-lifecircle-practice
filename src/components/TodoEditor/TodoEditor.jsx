import { Component } from "react";
import { Form, Input, Button } from "./TodoEditor.js";

export class TodoEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { text } = this.state;
    this.props.addTask({ ...this.state });
    this.setState({ text: "" });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Input
          value={this.state.text}
          onChange={this.handleChange}
          type="text"
          placeholder="Your todo"
          name="todo-add"
        />
        <Button type="submit">Add</Button>
      </Form>
    );
  }
}
