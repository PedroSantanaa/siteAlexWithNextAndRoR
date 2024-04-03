"use client"
import { login } from '@/actions';
import { Button, FormGroup, Input, Label, LeftButton, LoginFormStyle, LoginPageContainer, LoginTitle, Error } from '@/app/styled-components/LoginFormStyled';
import React from 'react';
import { useFormState } from 'react-dom';



const LoginForm = () => {
 const [state,formAction] = useFormState<any,FormData>(login,undefined) 

  return (
    <LoginPageContainer>
      <LoginFormStyle action={formAction}>
        <LoginTitle>Login</LoginTitle>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Senha:</Label>
          <Input type="password" id="password" name="password" required />
        </FormGroup>
        <LeftButton><Button type="submit">Login</Button></LeftButton>
        {state?.error && <Error>{state.error}</Error>}
      </LoginFormStyle>
    </LoginPageContainer>
  );
};

export default LoginForm;
