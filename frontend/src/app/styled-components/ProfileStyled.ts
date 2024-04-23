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

export const ProfileDetails = styled.div`
  margin-right: auto;
`;

export const ProfileDetailsTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #0a264c;
`;

export const ProfileDetailsSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
`;

export const ProfileDetailsText = styled.p`
  font-size: 1rem;
  color: #374151;
`;

export const EditProfileButton = styled.button`
  background-color: #0a264c;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  font-size: 0.8rem;
  margin-left: auto;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const ProfileInfoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #0a264c;
  margin-bottom: 0.5rem;
`;

export const ProfileInfoSubtitle = styled.p`
  font-size: 1rem;
  color: #6b7280;
  margin-bottom: 2rem;
`;
