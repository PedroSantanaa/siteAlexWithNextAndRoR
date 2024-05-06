'use client'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import React from 'react'
import { Container } from '../styled-components/GeneralStyle'
import { NewProjectContainer, NewProjectDetailsText, NewProjectHeader, NewProjectHeaderLine, NewProjectHeaderSubtitle, NewProjectHeaderTitle, NewProjectInfoContainer, NewProjectSection } from '../styled-components/NewProject'

const NovoProjeto = () => {
  const {currentUser, loading, error} = useFetchCurrentUser()

  return (
    <Container>
      <NewProjectContainer>
        <NewProjectHeader>
          <NewProjectHeaderTitle>NOVO PROJETO</NewProjectHeaderTitle>
          <NewProjectHeaderSubtitle>Crie um novo projeto de forma rápida</NewProjectHeaderSubtitle>
          <NewProjectHeaderLine/>
        </NewProjectHeader>
        <NewProjectInfoContainer>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da Concessionária</NewProjectDetailsText>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações do Cliente</NewProjectDetailsText>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da instalação - Unidade geradora</NewProjectDetailsText>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Especificações do projeto</NewProjectDetailsText>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Documentos complementares (opcional)</NewProjectDetailsText>
          </NewProjectSection>
        </NewProjectInfoContainer>
      </NewProjectContainer>
    </Container>
  )
}

export default NovoProjeto