import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
   padding: 20px 36px;
  border-radius: 60px;
  font-size: 18px;
  color:rgb(1, 34, 69);
  border: 3px solid rgb(0, 170, 255);
  outline: none;
`;

export const Button = styled.button`
  background:rgb(255, 179, 71);
  border: none;
  color: #fff;
  padding: 20px 36px;
  border-radius: 60px;
  cursor: pointer;
  font-size: 18px;
  transition: 0.3s;

  &:hover {
    background:rgb(255, 156, 0);
  }
`;