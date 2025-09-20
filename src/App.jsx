import "./App.css";
import { Component } from "react";
import { ModalSect } from "./components/ModalSect/ModalSect.jsx";
import initialTodos from "./data/todo.json";
import { TodoEditor } from "./components/TodoEditor/TodoEditor.jsx";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { Filter } from "./components/Filter/Filter.jsx";
import { Info } from "./components/Info/Info.jsx";
import { nanoid } from "nanoid";
import { Main, Header, Container } from "./App.js";
import { GlobalStyle } from "./GlabalStyles.js";
import { Timer } from "./components/Timer/Timer.jsx";
import { Calculator } from "./components/Calculator/Calculator.jsx";

class App extends Component {
  state = {
    todos: [],
    filter: "",
  };

  setFilter = (value) => {
    this.setState({ filter: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log(this.state.todos);
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  componentDidMount() {
    if (localStorage.getItem("todos")) {
      console.log("a");
      this.setState({ todos: JSON.parse(localStorage.getItem("todos")) });
    } else {
      console.log("b");
      localStorage.setItem("todos", JSON.stringify(initialTodos));
    }
  }

  addTask = ({ text }) => {
    this.setState((prevState) => ({
      todos: [
        ...prevState.todos,
        { id: nanoid(8), text: text, completed: false },
      ],
    }));
  };

  deleteTask = (e) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter(
        (todo) => todo.id !== e.target.parentElement.id
      ),
    }));
  };

  changeChecked = ({ id, completed }) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: completed ? false : true } : todo
      ),
    }));
  };

  filterTask = () => {
    const { todos, filter } = this.state;
    if (!filter) return todos;

    const text = filter.toLowerCase();
    return todos.filter((todo) => todo.text.toLowerCase().includes(text));
  };

  render() {
    return (
      <Main>
        <GlobalStyle />
        <Container>
          <ModalSect />
        </Container>
        <Container>
          <Header>
            <TodoEditor addTask={this.addTask} />
            <Info todos={this.state.todos} />
            <Filter setFilter={this.setFilter} filter={this.state.filter} />
          </Header>
          <TodoList
            todos={this.filterTask()}
            changeChecked={this.changeChecked}
            deleteTask={this.deleteTask}
          />
        </Container>
        <Container>
          <Timer />
        </Container>
        <Container>
          <Calculator />
        </Container>
      </Main>
    );
  }
}

export default App;
