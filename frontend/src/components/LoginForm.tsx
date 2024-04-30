"use client"
import { login } from '@/actions';
import {  FormGroup, Input, Label, LeftButton, LoginFormStyle, LoginPageContainer, LoginTitle, Error, LoginText, LoginButton, SignupContainer, SignupText, SignupButton } from '@/app/styled-components/LoginFormStyled';
import React from 'react';
import { useFormState } from 'react-dom';



const LoginForm = () => {
 const [state,formAction] = useFormState<any,FormData>(login,undefined) 

  return (
    <LoginPageContainer>
      <LoginFormStyle action={formAction}>
        <LoginTitle>Painel do Usuário</LoginTitle>
        <LoginText>Faça login para acompanhar seus projetos</LoginText>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <LeftButton><LoginButton type="submit">LOGIN</LoginButton></LeftButton>
        {state?.error && <Error>{state.error}</Error>}
      <SignupContainer>
        <SignupText>Não tem uma conta? Faça seu cadastro</SignupText>
        <SignupButton href='/cadastro'>CADASTRAR</SignupButton>
      </SignupContainer>
      </LoginFormStyle>
    </LoginPageContainer>
  );
};

export default LoginForm;
