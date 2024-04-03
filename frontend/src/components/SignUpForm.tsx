"use client"
import { signup } from '@/actions';
import { Button, FormGroup, Input, Label, LeftButton, SignUpTitle, SignupFormStyle, SignupPageContainer, Error, Success } from '@/app/styled-components/SignupFormStyled';
import React from 'react';
import { useFormState } from 'react-dom';
import styled from 'styled-components';



const SignUpForm = () => {
 const [state,formAction] = useFormState<any,FormData>(signup,undefined) 

  return (
    <SignupPageContainer>
      <SignupFormStyle action={formAction}>
        <SignUpTitle>Cadastro</SignUpTitle>
        <FormGroup>
        <Label htmlFor="name">Nome:</Label>
        <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <LeftButton><Button type="submit">Cadastar</Button></LeftButton>
        {state?.error && <Error>{state.error}</Error>}
        {state?.success && <Success>{state.success}</Success>}
      </SignupFormStyle>
    </SignupPageContainer>
  );
};

export default SignUpForm;
