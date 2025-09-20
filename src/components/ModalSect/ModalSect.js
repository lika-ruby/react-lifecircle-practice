import styled from "styled-components";

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
  font-size: 20px;
  color: rgb(1, 34, 69);
  margin-bottom: 20px;
`;