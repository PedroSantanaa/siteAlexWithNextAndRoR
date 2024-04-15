import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const LoginTitle = styled.h2`
  color: black;
  font-size: 36px;
  margin-bottom: 10px;
  text-align: center;
`;

export const LoginText = styled.p`
  color: grey;
  font-size: 14px;
  margin-bottom: 20px;
  text-align: center;
`;

export const LoginFormStyle = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 60px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  width: 450px;
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: black;
  font-weight: bold
`;

export const Input = styled.input`
  width: calc(100% - 30px);
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const LeftButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
`;

export const LoginButton = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  font-size: 20px;
  text-align: center;
`;

export const SignupContainer = styled.div`
  border-top: 1px solid grey;
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SignupText = styled.p`
  color: grey;
  font-size: 14px;
  margin-top: 20px;
  text-align: center;
`;

export const SignupButton = styled.a`
  padding: 10px;
  color: blue;
  border: 1px solid blue;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;