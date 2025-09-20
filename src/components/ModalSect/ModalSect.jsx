import { Component } from "react";
import { Modal } from "../Modal/Modal.jsx";
import { Button, Text } from "./ModalSect.js";

export class ModalSect extends Component {
  state = {
    isOpen: false,
    name: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isOpen !== this.state.isOpen) {
      document.body.style.overflow = this.state.isOpen ? false : true;
    }
  }

  changeName = (name) => {
    this.setState({ name: name });
  };

  openModal = () => {
    document.querySelector("#backdrop").classList.remove("is-hidden");
  };

  render() {
    return (
      <>
        <Text>{this.state.name}</Text>
        <Button onClick={this.openModal} type="button">
          Click me
        </Button>
        <Modal changeName={this.changeName} />
      </>
    );
  }
}
