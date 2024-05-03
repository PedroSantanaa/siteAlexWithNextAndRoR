import styled from "styled-components";

export const LogoutContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #e5e5e5;
`;

export const LogoutButton = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
`