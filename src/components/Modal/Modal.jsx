import { Component } from "react";
import {
  Backdrop,
  ModalS,
  Form,
  Button,
  Input,
  Text,
  Title,
  Cross,
} from "./Modal";

export class Modal extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.closeModal();
    }
  };

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  };

  sendModal = (e) => {
    e.preventDefault();
    const { name } = this.state;
    this.props.changeName(name);
    this.setState({ name: "" });
    this.closeModal();
  };

  closeModal = () => {
    this.setState({ name: "" });
    document.querySelector("#backdrop").classList.add("is-hidden");
  };

  render() {
    return (
      <Backdrop id="backdrop" className="is-hidden">
        <ModalS>
          <Form onSubmit={this.sendModal}>
            <Title>Enter your name</Title>
            <Text>Your name must have 3 sumbols</Text>
            <Input
              required
              type="text"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Button type="submit">Send</Button>
            <Cross onClick={this.closeModal} type="button">
              ✖
            </Cross>
          </Form>
        </ModalS>
      </Backdrop>
    );
  }
}
