import styled from "styled-components";

export const List = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 20px;
`;

export const Item = styled.li`
  background:rgb(255, 237, 204);
  padding: 20px 36px;
  border-radius: 60px;
  font-size: 18px;
  color:rgb(33, 16, 0);
`;

export const Value = styled.span`
  font-weight: bold;
  color:rgb(255, 123, 0);
`;