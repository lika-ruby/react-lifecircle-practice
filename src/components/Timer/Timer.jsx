import { Component } from "react";
import { Text } from "./Timer";

export class Timer extends Component {
  state = {
    seconds: 0,
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <Text>{this.state.seconds}</Text>
      </>
    );
  }
}
