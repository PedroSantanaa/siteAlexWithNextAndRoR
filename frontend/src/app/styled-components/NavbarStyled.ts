import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: white;
  color: black;
  border-right: 1px solid #ccc;
`;

export const NavBarContent = styled.div`
  padding: 10px 20px;
`;

export const NavbarStyled = styled.nav`
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;  

export const NavbarLinkStyled = styled.a<{ $isactive?: boolean; }>`
  width: 100%;
  color: black;
  text-decoration: none;
  padding: 10px 10px;
  text-align: center;
  background-color: ${({ $isactive }) => $isactive ? '#ccc' : 'transparent'};
  &:hover {
    background-color: #ccc;
  }
`;

