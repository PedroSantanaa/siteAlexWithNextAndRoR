import styled from "styled-components";

export const SignupPageContainer = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const SignUpTitle = styled.h2`
  color: black;
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;

export const SignupFormStyle = styled.form`
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
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

export const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const Error = styled.p`
  color: red;
  font-size: 16px;
  text-align: center;
`;

export const Success = styled.p`
  color: green;
  font-size: 16px;
  text-align: center;
`;