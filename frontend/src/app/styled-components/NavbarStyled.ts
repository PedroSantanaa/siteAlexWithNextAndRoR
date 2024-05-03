import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background-color: white;
  border-right: 1px solid #ccc;
  overflow: hidden;
`;

export const NavBarContent = styled.div`
  padding: 10px 20px;
`;

export const NavBarContentTitle = styled.h1`
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
`;

export const NavbarStyled = styled.nav`
  width: 100%;
  color: #333333;
  display: flex;
  flex-direction: column;
  align-items: center;
`;  

export const NavbarLinkStyled = styled.a<{ $isactive?: boolean; }>`
  width: 100%;
  color: #333333;
  text-decoration: none;
  padding: 10px 10px;
  text-align: center;
  background: ${({ $isactive }) => $isactive ? 'linear-gradient(to right, #fca311 1.5%, #e5e5e5 1.5%)' : 'transparent'};
  transition: background 0.1s, transform 0.6s;
  &:hover {
    background: linear-gradient(to right, #fca311 10%, #e5e5e5 10%); background-size: 100% 100%; background-position: left bottom; background-repeat: no-repeat;
    transform: scale(1.2);
  }
`;

