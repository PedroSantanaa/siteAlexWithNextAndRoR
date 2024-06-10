'use client'
import { format } from 'date-fns';
import React, { ChangeEvent, useState} from 'react'
import { Project, useFetchProjects } from '@/hooks/useFetchProjects';
import {  FilterSearch, FilterSearchInput, FilterSelectOption, FiltersContainer, FiltersForm, FiltersFormFieldSelect, ProjectListHeaderP, ProjectsList, ProjectsListHeader, ProjectsListHeaderFilterCenter, ProjectsListHeaderFilterLeft, ProjectsListHeaderFilterRight, ProjectsListHeaderFilters, ProjectsListHeaderTitle, ProjectsListProject, ProjectsListProjectHeader } from '../styled-components/MyProjects';
import { Container, Loading } from '../styled-components/GeneralStyle';
import LoadingModal from '@/components/Modal';

const MyProjects = () => {
  const { projects:apiData, loading, error } = useFetchProjects();
  const [filter, setFilter] = useState("Recentes");
  const [filterSelectValue, setFilterSelectValue] = useState("Filtros");
  const [filterSearchValue, setFilterSearchValue] = useState("");

  const handleFilterSelectOptionClick = (event:ChangeEvent<HTMLSelectElement>) => {
    setFilterSelectValue(event.target.value);
  };

  const handleFilterSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterSearchValue(e.target.value);
  };
  const dadosFiltrados = apiData.filter((project) => {return (project.name.toLowerCase().includes(filterSearchValue.toLowerCase()))})

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
                  <FilterSelectOption value="Filtro" >
                    Filtro
                  </FilterSelectOption>
                  <FilterSelectOption value="Nome">
                    Nome
                  </FilterSelectOption>
                  <FilterSelectOption value="CPF">
                    CPF
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
        
        {filteredProjects.map((project:Project) => (
          <ProjectsListProject key={project.id}>
            <ProjectsListProjectHeader>{project.name}</ProjectsListProjectHeader>
            <p>Criado em: {format(new Date(project.created_at), 'yyyy-MM-dd')}</p>
            <p>Atualizado em: {format(new Date(project.updated_at), 'yyyy-MM-dd')}</p>
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
            <button>Visualizar</button>
          </ProjectsListProject>
        ))}
      </ProjectsList>
    </Container>
  );
};

export default MyProjects


