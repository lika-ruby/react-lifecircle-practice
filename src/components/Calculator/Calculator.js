import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 20px 36px;
  border-radius: 60px;
  font-size: 18px;
  border: 3px solid rgb(0, 170, 255);
  outline: none;
  color: rgb(1, 34, 69);
  width: 150px;
  text-align: center;
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

export const Text = styled.p`
  font-size: 18px;
  color: rgb(1, 34, 69);
  margin: 0;
`;