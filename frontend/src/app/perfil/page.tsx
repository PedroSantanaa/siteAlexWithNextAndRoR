"use client"
import React from 'react'
import { Container } from '../styled-components/GeneralStyle'
import { EditProfileButton, ProfileContainer, ProfileDetailsCategorySubText, ProfileDetailsCategoryText, ProfileDetailsMain, ProfileDetailsMainSubtitle,  ProfileDetailsMainText,  ProfileDetailsText,  ProfileGridContainer,  ProfileHeader,ProfileHeaderLine,ProfileHeaderSubtitle,ProfileHeaderTitle,ProfileInfo, ProfileInfoSubtitle} from '../styled-components/ProfileStyled'

const page =  () => {
  // const session = await getSession()

  // if (session === false) {
  //   redirect('/')
  // }
  return (
    <Container>
      <ProfileContainer>
        <ProfileHeader>
          <ProfileHeaderTitle>CONFIGURAÇÕES</ProfileHeaderTitle>
          <ProfileHeaderSubtitle>Edite seus dados pessoais.</ProfileHeaderSubtitle>
          <ProfileHeaderLine/>
        </ProfileHeader>
          <ProfileDetailsMain>
            <ProfileDetailsMainText>Email: <ProfileDetailsMainSubtitle>pedro.ferraz01@gmail.com</ProfileDetailsMainSubtitle> </ProfileDetailsMainText>
            <ProfileDetailsMainText>Senha: <ProfileDetailsMainSubtitle>******</ProfileDetailsMainSubtitle></ProfileDetailsMainText>
          </ProfileDetailsMain>
          <ProfileDetailsText>DADOS PESSOAIS</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Nome: <ProfileDetailsCategorySubText>Pedro Santana</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>CPF: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>DADOS DE CONTATOS</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Telefone: <ProfileDetailsCategorySubText>(77) 99210-9292</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>ENDEREÇO</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>CEP: <ProfileDetailsCategorySubText>45028-490</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Estado: <ProfileDetailsCategorySubText>Bahia</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Rua: <ProfileDetailsCategorySubText>B</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Bairro: <ProfileDetailsCategorySubText>Candeias</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Cidade: <ProfileDetailsCategorySubText>Vitória da Conquista</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Nº: <ProfileDetailsCategorySubText>155</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Complemento: <ProfileDetailsCategorySubText>Casa 53</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>DADOS DA EMPRESA</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Nome: <ProfileDetailsCategorySubText>Pedro Santana</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>CPF: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>ENDERAÇO DA EMPRESA</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>CNPJ: <ProfileDetailsCategorySubText>-</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Nome Fantasia: <ProfileDetailsCategorySubText>0</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Razão Social: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Registro Estadual: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
            <ProfileDetailsCategoryText>Registro Municipal: <ProfileDetailsCategorySubText>056......</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <ProfileDetailsText>CARGO NA EMPRESA</ProfileDetailsText>
          <ProfileGridContainer>
            <ProfileDetailsCategoryText>Cargo: <ProfileDetailsCategorySubText>Dataops</ProfileDetailsCategorySubText></ProfileDetailsCategoryText>
          </ProfileGridContainer>
          <EditProfileButton>Editar Perfil</EditProfileButton>
      </ProfileContainer>
    </Container> 
  )
}

export default page