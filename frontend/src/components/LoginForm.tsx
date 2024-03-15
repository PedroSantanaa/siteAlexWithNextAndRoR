import { login } from '@/actions';
import React from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoginTitle = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

const LoginFormStyle = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: black;
  font-weight: bold
`;

const Input = styled.input`
  width: calc(100% - 30px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const LeftButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your login logic here
  };

  return (
    <LoginPageContainer>
      <LoginFormStyle action={login}>
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
      </LoginFormStyle>
    </LoginPageContainer>
  );
};

export default LoginForm;
