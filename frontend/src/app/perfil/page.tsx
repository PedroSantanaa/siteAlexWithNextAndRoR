"use client"
import { getSession } from '@/actions'
import { redirect } from 'next/navigation'
import React from 'react'
import { Container } from '../styled-components/GeneralStyle'
import { EditProfileButton, ProfileContainer, ProfileDetails, ProfileDetailsSubtitle, ProfileDetailsText, ProfileDetailsTitle, ProfileHeader,ProfileHeaderLine,ProfileHeaderSubtitle,ProfileHeaderTitle,ProfileInfo, ProfileInfoSubtitle, ProfileInfoTitle } from '../styled-components/ProfileStyled'

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
          <ProfileDetails>
            <ProfileDetailsTitle>Nome do Usuário</ProfileDetailsTitle>
            <ProfileDetailsSubtitle>Email do Usuário</ProfileDetailsSubtitle>
            <ProfileDetailsText>Informações do usuário</ProfileDetailsText>
          </ProfileDetails>
          <EditProfileButton>Editar Perfil</EditProfileButton>
        <ProfileInfo>
          <ProfileInfoTitle>Informações do Perfil</ProfileInfoTitle>
          <ProfileInfoSubtitle>Informações adicionais do usuário</ProfileInfoSubtitle>
        </ProfileInfo>
      </ProfileContainer>
    </Container> 
  )
}

export default page