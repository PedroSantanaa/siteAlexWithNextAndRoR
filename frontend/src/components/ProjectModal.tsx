// ProjectModal.tsx
import React from 'react';
import { CloseButton, ModalContent, ModalOverlay, FileLink, FileList, FileItem, FileActions, DownloadButton, OpenButton, Title, SectionTitle, ProjectInfo } from '@/app/styled-components/ProjectModal';

interface Document {
  id: number;
  name: string;
  url: string;
}

interface Project {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  concessionaria: string;
  cpf: string;
  cnpj: string;
  estado: string;
  latitude: number;
  longitude: number;
  tipo_disjuntor: string;
  valor_disjuntor: string;
  total_power: number;
  status: string;
  documents: Document[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const baseUrl = process.env.RUBY_PUBLIC_API_URL || "http://localhost:3001";

  const downloadFile = (file: Document) => {
  const fileUrl = `${baseUrl}/${file.url}`;
  fetch(fileUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.name;
      a.click();
      URL.revokeObjectURL(url);
    });
};

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        <Title>{project.name}</Title>
        <ProjectInfo>
          <SectionTitle>Informações do Projeto</SectionTitle>
          <p><strong>Criado em:</strong> {project.created_at}</p>
          <p><strong>Atualizado em:</strong> {project.updated_at}</p>
          <p><strong>Concessionária:</strong> {project.concessionaria}</p>
          <p><strong>CPF:</strong> {project.cpf}</p>
          <p><strong>CNPJ:</strong> {project.cnpj}</p>
          <p><strong>Estado:</strong> {project.estado}</p>
          <p><strong>Latitude:</strong> {project.latitude}</p>
          <p><strong>Longitude:</strong> {project.longitude}</p>
          <p><strong>Tipo de disjuntor:</strong> {project.tipo_disjuntor}</p>
          <p><strong>Valor de disjuntor:</strong> {project.valor_disjuntor}</p>
          <p><strong>Total de energia:</strong> {project.total_power}</p>
          <p><strong>Status:</strong> {project.status}</p>
        </ProjectInfo>
        
        <SectionTitle>Arquivos</SectionTitle>
        <FileList>
          {project.documents.map((file) => (
            <FileItem key={file.id}>
              <FileLink href={`${baseUrl}${file.url}`} target="_blank" rel="noopener noreferrer">{file.name}</FileLink>
              <FileActions>
                <OpenButton href={`${baseUrl}${file.url}`} target="_blank" rel="noopener noreferrer">Abrir</OpenButton>
                <DownloadButton onClick={() => downloadFile(file)}>Baixar</DownloadButton>
              </FileActions>
            </FileItem>
          ))}
        </FileList>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
