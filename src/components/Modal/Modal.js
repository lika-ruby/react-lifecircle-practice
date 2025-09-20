import styled from "styled-components";

export const Backdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 4;
  transition: opacity 400ms cubic-bezier(0.075, 0.82, 0.165, 1);

  &.is-hidden {
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
`;

export const ModalS = styled.div`
  width: calc(100% - 30px);
  max-width: 450px;
  background-color:  #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 40px 60px;
  border-radius: 40px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);

  z-index: 5;
  transition: 
    visibility 1000ms cubic-bezier(0.075, 0.82, 0.165, 1),
    transform 0.5s cubic-bezier(0.25, 0.31, 0.17, 0.89);
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: rgb(1, 34, 69);
  text-align: center;
`;

export const Text = styled.p`
  font-size: 16px;
  color: rgb(140, 158, 167);
  text-align: center;
`;

export const Input = styled.input`
  padding: 20px 36px;
  border-radius: 60px;
  font-size: 18px;
  color: rgb(1, 34, 69);
  border: 3px solid rgb(0, 170, 255);
  outline: none;
  width: 100%;
`;

export const Button = styled.button`
  padding: 20px 36px;
  border-radius: 60px;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background: rgb(255, 179, 71);
  color: #fff;
  transition: 0.3s;

  &:hover {
    background: rgb(255, 156, 0);
  }
`;


export const Cross = styled.button`

    background: #ff7070;
    color: #fff;
    width: 30px;
    border-radius: 50%;
    padding: 6px 10px;
    font-size: 14px;
    position: absolute;
    right: 20px;
    top: 20px;

    &:hover {
      background: #ff4c4c;
    }
  
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;