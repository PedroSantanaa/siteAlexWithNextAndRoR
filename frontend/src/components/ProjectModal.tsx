// ProjectModal.tsx
import React from 'react';
import { CloseButton, ModalContent, ModalOverlay } from '@/app/styled-components/ProjectModal';

interface Project {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  user_id: number;
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
  documents: File[];
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;
  console.log(project);
  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>Fechar</CloseButton>
        <h2>{project.name}</h2>
        <p>Criado em: {project.created_at}</p>
        <p>Atualizado em: {project.updated_at}</p>
        <p>Concessionária: {project.concessionaria}</p>
        <p>CPF: {project.cpf}</p>
        <p>CNPJ: {project.cnpj}</p>
        <p>Estado: {project.estado}</p>
        <p>Latitude: {project.latitude}</p>
        <p>Longitude: {project.longitude}</p>
        <p>Tipo de disjuntor: {project.tipo_disjuntor}</p>
        <p>Valor de disjuntor: {project.valor_disjuntor}</p>
        <p>Total de energia: {project.total_power}</p>
        <p>Status: {project.status}</p>

        <h3>Arquivos:</h3>
        <ul>
          {project.documents.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProjectModal;
