import { Component } from "react";
import { Form, Input, Button, Text } from "./Calculator";

export class Calculator extends Component {
  state = {
    value1: 0,
    value2: 0,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.value1 !== this.state.value1 &&
      nextState.value2 !== this.state.value2
    );
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ value1: Number(e.target.firstElementChild.value) });
    this.setState({ value2: Number(e.target.children[2].value) });
  };

  countSum = () => {
    console.log(this.state.value1);
    console.log(this.state.value2);

    return this.state.value1 + this.state.value2;
  };

  render() {
    return (
      <>
        <Form onSubmit={this.submitForm}>
          <Input
            type="number"
            name="value1"
            defaultValue={this.state.value1}
            placeholder="Number 1"
          />
          <Text>+</Text>
          <Input
            type="number"
            name="value2"
            defaultValue={this.state.value2}
            placeholder="Number 2"
          />
          <Button type="submit">=</Button>
          <Text>{this.countSum()}</Text>
        </Form>
      </>
    );
  }
}
