'use client'
import { format } from 'date-fns';
import React, { ChangeEvent, useState} from 'react'
import { Project, useFetchProjects } from '@/hooks/useFetchProjects';
import {  FilterSearch, FilterSearchInput, FilterSelectOption, FiltersContainer, FiltersForm, FiltersFormFieldSelect, ProjectListHeaderP, ProjectsCell, ProjectsHeader, ProjectsList, ProjectsListHeader, ProjectsListHeaderFilterCenter, ProjectsListHeaderFilterLeft, ProjectsListHeaderFilterRight, ProjectsListHeaderFilters, ProjectsListHeaderTitle, ProjectsListProject, ProjectsListProjectHeader, ProjectsRow, ProjectsTable, ViewButton } from '../styled-components/MyProjects';
import { Container, Loading } from '../styled-components/GeneralStyle';
import LoadingModal from '@/components/Modal';
import ProjectModal from '@/components/ProjectModal';
import apiInstance from '@/utils/axios';
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser';

const MyProjects = () => {
  const { projects:apiData, loading, error } = useFetchProjects();
  const [filter, setFilter] = useState("Recentes");
  const [filterSelectValue, setFilterSelectValue] = useState("Filtros");
  const [filterSearchValue, setFilterSearchValue] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const {currentUser, jwt } = useFetchCurrentUser();
  const openModal = (project:Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const handleStatusChange = async (projectId: number, newStatus: string) => {
    // Lógica para atualizar o status do projeto
    try {
      const response:Response = await apiInstance.put(`http://localhost:3001/projects/${projectId}`, 
      {status: newStatus},
      {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${jwt}`
      }
    });
     
    } catch (error) {
    }
  };

  const handleFilterSelectOptionClick = (event:ChangeEvent<HTMLSelectElement>) => {
    setFilterSelectValue(event.target.value);
  };

  const handleFilterSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearchValue(e.target.value);
  };
  const dadosFiltrados = apiData.filter((project: Project) => {
    if (filterSelectValue === "Nome") {
      return project.name.toLowerCase().includes(filterSearchValue.toLowerCase());
    } else if (filterSelectValue === "CPF") {
      return project.cpf && project.cpf.toLowerCase().includes(filterSearchValue.toLowerCase());
    } else if (filterSelectValue === "CNPJ") {
      return project.cnpj && project.cnpj.toLowerCase().includes(filterSearchValue.toLowerCase());
    }
    return true; // Caso não seja selecionado nenhum filtro específico, retorna todos os projetos
  });


  const filteredProjects = dadosFiltrados.sort((a, b) => {
    if (filter === "A-Z") {
      return a.name.localeCompare(b.name);
    } else if (filter === "Z-A") {
      return b.name.localeCompare(a.name);
    } else if (filter === "Recentes") {
      return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    } else if (filter === "Antigos") {
      return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
    }
    return 0;
  });

  if (loading) {
    return <LoadingModal/>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <Container>
      <ProjectsList>
        <ProjectsListHeader>
          <ProjectsListHeaderTitle>PROJETOS</ProjectsListHeaderTitle>
          <ProjectListHeaderP>Acompanhe seus projetos</ProjectListHeaderP>
          </ProjectsListHeader>
        <FiltersContainer>
          <FiltersForm>
              <FiltersFormFieldSelect value={filterSelectValue} onChange={handleFilterSelectOptionClick}>
                  <FilterSelectOption value="Filtros" disabled={filterSelectValue !== "Filtros"}>
                    Filtros
                  </FilterSelectOption>
                  <FilterSelectOption value="Nome">
                    Nome
                  </FilterSelectOption>
                  <FilterSelectOption value="CPF">
                    CPF
                  </FilterSelectOption>
                  <FilterSelectOption value="CNPJ">
                    CNPJ
                  </FilterSelectOption>
              </FiltersFormFieldSelect>
            {filterSelectValue === "Nome" && (
                <FilterSearch>
                  <FilterSearchInput
                    type="text"
                    value={filterSearchValue}
                    onChange={handleFilterSearchInputChange}
                    placeholder='Digite o nome'
                  />
                </FilterSearch>
            )}
            {filterSelectValue === "CPF" && (
                <FilterSearch>
                  <FilterSearchInput
                    type="text"
                    value={filterSearchValue}
                    onChange={handleFilterSearchInputChange}
                    placeholder='Digite o CPF'
                  />
                </FilterSearch>
            )}
            {filterSelectValue === "CNPJ" && (
                <FilterSearch>
                  <FilterSearchInput
                    type="text"
                    value={filterSearchValue}
                    onChange={handleFilterSearchInputChange}
                    placeholder='Digite o CNPJ'
                  />
                </FilterSearch>
            )}
          </FiltersForm>
            <ProjectsListHeaderFilters>
              <ProjectsListHeaderFilterLeft onClick={() => setFilter("A-Z")} $isactive={filter === 'A-Z'}> A-Z </ProjectsListHeaderFilterLeft>
              <ProjectsListHeaderFilterCenter onClick={() => setFilter("Z-A")} $isactive={filter === 'Z-A'}> Z-A </ProjectsListHeaderFilterCenter>
              <ProjectsListHeaderFilterCenter onClick={() => setFilter("Recentes")} $isactive={filter === 'Recentes'}> Recentes </ProjectsListHeaderFilterCenter>
              <ProjectsListHeaderFilterRight onClick={() => setFilter("Antigos")} $isactive={filter === 'Antigos'}> Antigos </ProjectsListHeaderFilterRight>
            </ProjectsListHeaderFilters>
        </FiltersContainer>
        
        <div>
      <ProjectsTable>
        <ProjectsRow>
          <ProjectsHeader>Nome</ProjectsHeader>
          <ProjectsHeader>Criado em</ProjectsHeader>
          <ProjectsHeader>Atualizado em</ProjectsHeader>
          <ProjectsHeader>Concessionária</ProjectsHeader>
          <ProjectsHeader>CPF</ProjectsHeader>
          <ProjectsHeader>CNPJ</ProjectsHeader>
          <ProjectsHeader>Estado</ProjectsHeader>
          <ProjectsHeader>Latitude</ProjectsHeader>
          <ProjectsHeader>Longitude</ProjectsHeader>
          <ProjectsHeader>Tipo de disjuntor</ProjectsHeader>
          <ProjectsHeader>Valor de disjuntor</ProjectsHeader>
          <ProjectsHeader>Total de energia</ProjectsHeader>
          <ProjectsHeader>Status</ProjectsHeader>
          <ProjectsHeader>Ação</ProjectsHeader>
        </ProjectsRow>
        {filteredProjects.map((project) => (
          <ProjectsRow key={project.id}>
            <ProjectsCell>{project.name}</ProjectsCell>
            <ProjectsCell>{format(new Date(project.created_at), 'yyyy-MM-dd')}</ProjectsCell>
            <ProjectsCell>{format(new Date(project.updated_at), 'yyyy-MM-dd')}</ProjectsCell>
            <ProjectsCell>{project.concessionaria}</ProjectsCell>
            <ProjectsCell>{project.cpf}</ProjectsCell>
            <ProjectsCell>{project.cnpj}</ProjectsCell>
            <ProjectsCell>{project.estado}</ProjectsCell>
            <ProjectsCell>{project.latitude}</ProjectsCell>
            <ProjectsCell>{project.longitude}</ProjectsCell>
            <ProjectsCell>{project.tipo_disjuntor}</ProjectsCell>
            <ProjectsCell>{project.valor_disjuntor}</ProjectsCell>
            <ProjectsCell>{project.total_power}</ProjectsCell>
            {currentUser?.role === 1 ? (
              <ProjectsCell>
                <select
                  value={project.status}
                  onChange={(e) => handleStatusChange(project.id, e.target.value)}
                >
                  <option value="novo">Novo</option>
                  <option value="em analise">Em Análise</option>
                  <option value="aguardando solicitação">Aguardando Solicitação</option>
                  <option value="realizando vistoria">Realizando Vistoria</option>
                  <option value="finalizado">Finalizado</option>
                </select>
              </ProjectsCell>
              ) : (
                <ProjectsCell>{project.status}</ProjectsCell>
              )}
            <ProjectsCell>
              <ViewButton onClick={() => openModal(project)}>Visualizar</ViewButton>
            </ProjectsCell>
          </ProjectsRow>
        ))}
      </ProjectsTable>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </div>
      </ProjectsList>
    </Container>
  );
};

export default MyProjects;
