'use client'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { FinishSignupFormStyle, FinishSignupPageContainer, FinishSignupSubContainer, FinishSignupSubTitle, FinishSignupTitle,FormGroup, Input, Label, Error, FinishSignupButton, Success } from '../styled-components/CompletarCadastro'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser';
import { useFetchCompany } from '@/hooks/useFetchCompany';
import { useFormState } from 'react-dom';
import { companyInfo, userInfo } from '@/actions';
import LoadingModal from '@/components/Modal';

const CompletarCadastro = () => {
  const [state,formAction] = useFormState<any,FormData>(userInfo,undefined) 
  const { currentUser, loading, error } = useFetchCurrentUser();
  const [stateCompany,formActionCompany] = useFormState<any,FormData>(companyInfo,undefined) 
  const {company,loading:loading1,error:error1} = useFetchCompany(currentUser?.id || 0);
  const [formData, setFormData] = useState({
    cpf: currentUser?.cpf || '',
    phone: currentUser?.telefone || '',
    cep: currentUser?.cep || '',
    estado: currentUser?.estado || '',
    rua: currentUser?.rua || '',
    bairro: currentUser?.bairro || '',
    cidade: currentUser?.cidade || '',
    numero: currentUser?.numero || '',
    complemento: currentUser?.complemento || '',
  });
  const [companyData, setCompanyData] = useState({
    cnpj: company?.cnpj || '',
    fantasia: company?.nome_fantasia || '',
    razao: company?.razao_social || '',
    registro: company?.registro_estadual || '',
    municipal: company?.registro_municipal || '',
    cep: company?.cep || '',
    estado: company?.estado || '',
    rua: company?.rua || '',
    bairro: company?.bairro || '',
    cidade: company?.cidade || '',
    numero: company?.numero || '',
    complemento: company?.complemento || '',
  });

  useEffect(() => {
    // Atualiza o estado do formulário quando o currentUser mudar
    setFormData(prevState => ({
      ...prevState,
      cpf: currentUser?.cpf || '',
      phone: currentUser?.telefone || '',
      cep: currentUser?.cep || '',
      estado: currentUser?.estado || '',
      rua: currentUser?.rua || '',
      bairro: currentUser?.bairro || '',
      cidade: currentUser?.cidade || '',
      numero: currentUser?.numero || '',
      complemento: currentUser?.complemento || ''
    }));
    setCompanyData(prevState => ({
      ...prevState,
      cnpj: company?.cnpj || '',
      fantasia: company?.nome_fantasia || '',
      razao: company?.razao_social || '',
      registro: company?.registro_estadual || '',
      municipal: company?.registro_municipal || '',
      cep: company?.cep || '',
      estado: company?.estado || '',
      rua: company?.rua || '',
      bairro: company?.bairro || '',
      cidade: company?.cidade || '',
      numero: company?.numero || '',
      complemento: company?.complemento || ''
    }));
  }, [currentUser,company]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleChangeCompany = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCompanyData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <FinishSignupPageContainer>
      {(loading || loading1) && <LoadingModal/>}
      <FinishSignupTitle>Complete/Edite o seu cadastro</FinishSignupTitle>
      <FinishSignupSubContainer>
        <FinishSignupSubTitle>Dados Pessoais</FinishSignupSubTitle>
        <FinishSignupFormStyle action={formAction}>
          <FormGroup>
            <Label htmlFor="cpf">CPF</Label>
            <Input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Telefone</Label>
            <Input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input type="text" id="cep" name="cep" value={formData.cep} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input type="text" id="estado" name="estado" value={formData.estado} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rua">Rua</Label>
            <Input type="text" id="rua" name="rua" value={formData.rua} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bairro">Bairro</Label>
            <Input type="text" id="bairro" name="bairro" value={formData.bairro} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" value={formData.cidade} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="numero">Número</Label>
            <Input type="text" id="numero" name="numero" value={formData.numero} onChange={handleChange} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input type="text" id="complemento" name="complemento" value={formData.complemento} onChange={handleChange} required />
          </FormGroup>
          <FinishSignupButton type="submit">Salvar</FinishSignupButton>
          {state?.error && <Error>{state.error}</Error>}
          {state?.success && <Success>{state.success}</Success>}
        </FinishSignupFormStyle>
      </FinishSignupSubContainer>
      <FinishSignupSubContainer>
        <FinishSignupSubTitle>Dados da Empresa</FinishSignupSubTitle>
        <FinishSignupFormStyle action={formActionCompany}>
          <FormGroup>
            <Label htmlFor="cnpj">CNPJ</Label>
            <Input type="text" id="cnpj" name="cnpj" value={companyData.cnpj} onChange={handleChangeCompany} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="fantasia">Nome Fantasia</Label>
            <Input type="text" id="fantasia" name="fantasia" value={companyData.fantasia} onChange={handleChangeCompany} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="razao">Razão Social</Label>
            <Input type="text" id="razao" name="razao" value={companyData.razao} onChange={handleChangeCompany} required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="registro">Registro Estadual</Label>
            <Input type="text" id="registro" name="registro" value={companyData.registro} onChange={handleChangeCompany} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="municipal">Registro Municipal</Label>
            <Input type="text" id="municipal" name="municipal" value={companyData.municipal} onChange={handleChangeCompany} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cep">CEP</Label>
            <Input type="text" id="cep" name="cep" value={companyData.cep} onChange={handleChangeCompany} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="estado">Estado</Label>
            <Input type="text" id="estado" name="estado" value={companyData.estado} onChange={handleChangeCompany}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="rua">Rua</Label>
            <Input type="text" id="rua" name="rua" value={companyData.rua} onChange={handleChangeCompany}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bairro">Bairro</Label>
            <Input type="text" id="bairro" name="bairro" value={companyData.bairro} onChange={handleChangeCompany} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cidade">Cidade</Label>
            <Input type="text" id="cidade" name="cidade" value={companyData.cidade} onChange={handleChangeCompany}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="numero">Número</Label>
            <Input type="text" id="numero" name="numero" value={companyData.numero} onChange={handleChangeCompany} />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="complemento">Complemento</Label>
            <Input type="text" id="complemento" name="complemento" value={companyData.complemento} onChange={handleChangeCompany} />
          </FormGroup>
          <FinishSignupButton type="submit">Salvar</FinishSignupButton>
          {stateCompany?.error && <Error>{stateCompany.error}</Error>}
          {stateCompany?.success && <Success>{stateCompany.success}</Success>}
        </FinishSignupFormStyle>
      </FinishSignupSubContainer>
    </FinishSignupPageContainer>
  )
}

export default CompletarCadastro


