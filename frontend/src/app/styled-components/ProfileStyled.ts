import styled from "styled-components";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-bottom: 2rem;
  gap: 10px;
`;

export const ProfileHeaderLine = styled.div`  
  border: 1px solid #e5e5e5;
  padding: 1px;
  border-radius: 4px;
  margin-top: 6px;
`;

export const ProfileHeaderTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #0a264c;
`;

export const ProfileHeaderSubtitle = styled.h2`
  font-size: 1.2rem;
  color: #6b7280;
`;

export const ProfileDetailsMain = styled.div`
  margin-right: auto;
`;

export const ProfileDetailsMainText = styled.h3`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

export const ProfileDetailsMainSubtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #080000;
`;

export const ProfileGridContainer = styled.div`
  display: grid;
  grid-template-columns:repeat(2,1fr) ;
  grid-gap: 10px;
`;

export const ProfileDetailsText = styled.p`
  font-size: 0.8rem;
  border-bottom: 1px dotted #6b7280;
  margin: 20px 0px;
  color: #374151;
`;

export const EditProfileButton = styled.a`
  background-color: #0a264c;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: auto;
  text-decoration: none;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProfileDetailsCategoryText = styled.h3`
  display: flex;
  gap: 5px;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  color: black;
`;

export const ProfileDetailsCategorySubText = styled.p`
  font-size: 16px;
  font-weight: 500 ;
  color: black;
`;

export const ProfileInfoSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 2rem;
`;

export const ProfileButton = styled.button`
  padding: 10px;
  background-color: #0a264c;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  font-size: 20px;
  text-align: center;
`;