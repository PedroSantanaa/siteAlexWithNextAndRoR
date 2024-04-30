"use client"
import React from 'react'
import { Container } from '../styled-components/GeneralStyle'
import { EditProfileButton, ProfileContainer, ProfileDetailsCategorySubText, ProfileDetailsCategoryText, ProfileDetailsMain, ProfileDetailsMainSubtitle,  ProfileDetailsMainText,  ProfileDetailsText,  ProfileGridContainer,  ProfileHeader,ProfileHeaderLine,ProfileHeaderSubtitle,ProfileHeaderTitle,ProfileInfo, ProfileInfoSubtitle} from '../styled-components/ProfileStyled'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'

const Profile =  () => {
  const { currentUser:currentUser, loading, error } = useFetchCurrentUser();
  return (
    <Container>
      <ProfileContainer>
        <ProfileHeader>
          <ProfileHeaderTitle>CONFIGURAÇÕES</ProfileHeaderTitle>
          <ProfileHeaderSubtitle>Edite seus dados pessoais.</ProfileHeaderSubtitle>
          <ProfileHeaderLine/>
        </ProfileHeader>
          <ProfileDetailsMain>
            <ProfileDetailsMainText>Email: <ProfileDetailsMainSubtitle>{currentUser?.email}</ProfileDetailsMainSubtitle> </ProfileDetailsMainText>
            <ProfileDetailsMainText>Senha: <ProfileDetailsMainSubtitle>******</ProfileDetailsMainSubtitle></ProfileDetailsMainText>
          </ProfileDetailsMain>
          <ProfileDetailsText>DADOS PESSOAIS</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Nome: <ProfileDetailsCategorySubText>{currentUser?.name}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>CPF: <ProfileDetailsCategorySubText>{currentUser?.cpf}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>DADOS DE CONTATOS</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Telefone: <ProfileDetailsCategorySubText>{currentUser?.telefone}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>ENDEREÇO</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>CEP: <ProfileDetailsCategorySubText>{currentUser?.cep}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Estado: <ProfileDetailsCategorySubText>{currentUser?.estado}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Rua: <ProfileDetailsCategorySubText>{currentUser?.rua}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Bairro: <ProfileDetailsCategorySubText>{currentUser?.bairro}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Cidade: <ProfileDetailsCategorySubText>{currentUser?.cidade}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Nº: <ProfileDetailsCategorySubText>{currentUser?.numero}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Complemento: <ProfileDetailsCategorySubText>{currentUser?.complemento}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>DADOS DA EMPRESA</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>CNPJ: <ProfileDetailsCategorySubText>-</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Nome Fantasia: <ProfileDetailsCategorySubText>0</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Razão Social: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Registro Estadual: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Registro Municipal: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>ENDEREÇO DA EMPRESA</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>CEP: <ProfileDetailsCategorySubText>{currentUser?.cep}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Estado: <ProfileDetailsCategorySubText>{currentUser?.estado}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Rua: <ProfileDetailsCategorySubText>{currentUser?.rua}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Bairro: <ProfileDetailsCategorySubText>{currentUser?.bairro}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Cidade: <ProfileDetailsCategorySubText>{currentUser?.cidade}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Nº: <ProfileDetailsCategorySubText>{currentUser?.numero}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Complemento: <ProfileDetailsCategorySubText>{currentUser?.complemento}</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>CARGO NA EMPRESA</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Cargo: <ProfileDetailsCategorySubText>Dataops</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <EditProfileButton href='/completar-cadastro'>Editar Perfil</EditProfileButton>
      </ProfileContainer>
    </Container> 
  )
}

export default Profile