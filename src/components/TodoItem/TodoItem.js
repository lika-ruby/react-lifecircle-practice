import styled from "styled-components";

export const Item = styled.li`
  background: #e0f7ff; 
  padding: 20px 36px;
  border-radius: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  margin: 0;
  flex: 1;
  font-size: 18px;
  color:rgb(1, 34, 69);
  padding: 0 0 0 24px;
`;

export const Checkbox = styled.input`
  transform: scale(1.5);
  accent-color: #00aaff;
`;

export const DeleteButton = styled.button`
  background: #ff7070;
  color: #ffffff;
  padding: 6px 10px;
  border-radius: 50%;
  transition: 0.3s;

  &:hover {
    background: #ff4c4c;
  }
`;