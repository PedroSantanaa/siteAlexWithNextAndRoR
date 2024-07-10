import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 80%;
`;

export const CloseButton = styled.button`
  background-color: #0a264c;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  float: right;
  border-radius: 4px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

export const SectionTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const ProjectInfo = styled.div`
  margin-bottom: 20px;

  p {
    margin: 5px 0;
    line-height: 1.6;

    strong {
      display: inline-block;
      width: 150px;
    }
  }
`;

export const FileList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const FileItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background: #f9f9f9;
  border-radius: 4px;
`;

export const FileLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const FileActions = styled.div`
  display: flex;
  gap: 10px;
`;

export const OpenButton = styled.a`
  padding: 5px 10px;
  background: #0d400f;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;

  &:hover {
    background: #0056b3;
  }
`;

export const DownloadButton = styled.a`
  padding: 5px 10px;
  background: #0a264c;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer; 

  &:hover {
    background: #218838;
  }
`;