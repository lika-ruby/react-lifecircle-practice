import { Component } from "react";
import { List, Item, Value } from "./Info";

export class Info extends Component {
  allTasks = (todos) => {
    return todos.length;
  };

  completedTasks = (todos) => {
    const completedTodos = todos.filter((todo) => {
      if (todo.completed === true) {
        return todo;
      }
    });
    return completedTodos.length;
  };

  render() {
    return (
      <List>
        <Item>
          All tasks:
          <Value> {this.allTasks(this.props.todos)}</Value>
        </Item>
        <Item>
          Completed tasks:
          <Value> {this.completedTasks(this.props.todos)}</Value>
        </Item>
      </List>
    );
  }
}
