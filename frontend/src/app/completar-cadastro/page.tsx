'use client'
import React from 'react'
import { FinishSignupFormStyle, FinishSignupPageContainer, FinishSignupSubContainer, FinishSignupSubTitle, FinishSignupTitle,FormGroup, Input, Label } from '../styled-components/CompletarCadastro'

const page = () => {
  return (
    <FinishSignupPageContainer>
      <FinishSignupTitle>Complete o seu cadastro</FinishSignupTitle>
      <FinishSignupSubContainer>
        <FinishSignupSubTitle>Dados Pessoais</FinishSignupSubTitle>
        <FinishSignupFormStyle action="">
          <FormGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input type="text" id="cpf" name="cpf" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input type="text" id="phone" name="phone" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input type="text" id="cep" name="cep" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input type="text" id="estado" name="estado" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rua">Rua</Label>
            <Input type="text" id="rua" name="rua" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bairro">Bairro</Label>
            <Input type="text" id="bairro" name="bairro" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="numero">Número</Label>
            <Input type="text" id="numero" name="numero" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input type="text" id="complemento" name="complemento" required />
          </FormGroup>
        </FinishSignupFormStyle>
      </FinishSignupSubContainer>
      <FinishSignupSubContainer>
        <FinishSignupSubTitle>Dados da Empresa</FinishSignupSubTitle>
        <FinishSignupFormStyle action="">
          <FormGroup>
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input type="text" id="cnpj" name="cnpj" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fantasia">Nome Fantasia</Label>
            <Input type="text" id="fantasia" name="fantasia" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="razao">Razão Social</Label>
            <Input type="text" id="razao" name="razao" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="registro">Registro Estadual</Label>
            <Input type="text" id="registro" name="registro" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="municipal">Registro Municipal</Label>
            <Input type="text" id="municipal" name="municipal" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input type="text" id="cep" name="cep" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input type="text" id="estado" name="estado" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rua">Rua</Label>
            <Input type="text" id="rua" name="rua" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bairro">Bairro</Label>
            <Input type="text" id="bairro" name="bairro" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="numero">Número</Label>
            <Input type="text" id="numero" name="numero" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input type="text" id="complemento" name="complemento" required />
          </FormGroup>
        </FinishSignupFormStyle>
      </FinishSignupSubContainer>
    </FinishSignupPageContainer>
  )
}

export default page