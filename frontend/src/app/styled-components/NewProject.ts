import styled from "styled-components";

export const NewProjectContainer = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const NewProjectHeader = styled.header `
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NewProjectHeaderTitle = styled.h1 `
  color: #0a264c;
`

export const NewProjectHeaderSubtitle = styled.p `
  font-size: 16px;
  color: #fca311;
`

export const NewProjectHeaderLine = styled.div`  
  border: 1px solid #e5e5e5;
  padding: 1px;
  border-radius: 4px;
  margin-top: 6px;
`;

export const NewProjectInfoContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const NewProjectSection = styled.section `
  display: flex;
  flex-direction: column;
`

export const NewProjectDetailsText = styled.p`
  font-size: 16px;
  border-bottom: 1px dotted #6b7280;
  margin: 20px 0px;
  color: #374151;
  font-weight: bold;
`;
