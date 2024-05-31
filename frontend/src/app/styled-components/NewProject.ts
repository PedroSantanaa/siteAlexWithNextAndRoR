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

export const NewProjectInfoFormContainer = styled.form `
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

export const NewProjectSelectContainer = styled.div `
  display: flex;
  gap: 10px;
`

export const NewProjectSelect = styled.select `
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectInput = styled.input `
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectTypeOfPersonButtonContainer = styled.div `
  display: flex;
  align-items: center;  
  margin-bottom: 10px;
`;

export const NewProjectTypeOfPersonButton = styled.button<{ $isactive?: boolean; }>`
  padding: 10px;
  border: 1px solid #ccc;
    background-color: ${({ $isactive }) => $isactive ? '#0a264c' : 'transparent'};
    color: ${({ $isactive }) => $isactive ? '#fff' : '#374151'};
    border-radius: 4px;
    cursor: pointer;
`;

export const NewProjectCPFOrCNPJContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const NewProjectCPFOrCNPJInput = styled.input `
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectUploadLabel = styled.label `
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  border: 1px dashed #ccc;
  padding: 20px;
`;

export const NewProjectFileUploadInput = styled.input `
  display: none;
`;

export const NewProjectNomeorRazaoSocialInput = styled.input `
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectDisjuntorContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const NewProjectSelectDisjuntorType = styled.select `
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectSelectDisjuntorValue = styled.select `
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`

export const NewProjectLatitudeELongitudeContainer = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

export const NewProjectLatitudeInput = styled.input `
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectLongitudeInput = styled.input `
  width: 30%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectSelectTitularidade = styled.select `
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const NewProjectSelectMaterial = styled.select `
  width: 20%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const NewProjectTotalPowerInput = styled.input `
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const NewProjectSubmitButton = styled.button `
  width: 100%;
  padding: 10px;
  background-color: #0a264c;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;
`;