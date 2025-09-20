import { Component } from "react";
import { Item, Text, Checkbox, DeleteButton } from "./TodoItem";

export class TodoItem extends Component {
  state = {
    completed: this.props.agreed,
    id: this.props.id,
  };

  handleChange = (e) => {
    const { name, checked } = e.target;
    this.setState({ [name]: checked });
    const { completed, id } = this.state;
    this.props.changeChecked({ ...this.state });
  };

  render() {
    return (
      <Item id={this.props.id}>
        <Checkbox
          type="checkbox"
          name="completed"
          checked={this.state.completed}
          onChange={this.handleChange}
        />
        <Text>{this.props.text}</Text>
        <DeleteButton onClick={this.props.deleteTask} type="button">
          ✖
        </DeleteButton>
      </Item>
    );
  }
}
