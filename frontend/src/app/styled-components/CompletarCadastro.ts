import styled, { keyframes } from "styled-components";

export const FinishSignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 100vh;
`;

export const FinishSignupTitle = styled.h1`
  color: #0a264c;
  font-size: 46px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FinishSignupSubTitle = styled.h2`
  color: #fca311;
  font-size: 28px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FinishSignupSubContainer = styled.div`
`;

export const FinishSignupFormStyle = styled.form`
  display: flex; 
  gap: 20px;
  flex-wrap: wrap ;
  align-items: center;
  background-color: #fff;
  margin: 0px 20px;
  border-radius: 8px;
  padding: 60px 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
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

export const FinishSignupButton = styled.button`
  width: 60px ;
  height: 40px;
  padding: 10px;
  background-color: #0a264c;
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

export const Success = styled.p`
  color: green;
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
  border: 1px solid #0a264c;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`;
 


const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const LoadingModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled.div`
  border: 4px solid rgba(255, 255, 255, 0.3);
  border-top: 4px solid #fff;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;