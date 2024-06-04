'use client'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import { Container } from '../styled-components/GeneralStyle'
import {
  NewProjectCPFOrCNPJContainer,
  NewProjectCPFOrCNPJInput,
  NewProjectContainer,
  NewProjectDetailsText,
  NewProjectSelectDisjuntorValue,
  NewProjectHeader,
  NewProjectHeaderLine,
  NewProjectHeaderSubtitle,
  NewProjectHeaderTitle,
  NewProjectInput,
  NewProjectNomeorRazaoSocialInput,
  NewProjectSection,
  NewProjectSelect,
  NewProjectSelectContainer,
  NewProjectSelectDisjuntorType,
  NewProjectSelectTitularidade,
  NewProjectTypeOfPersonButton,
  NewProjectTypeOfPersonButtonContainer,
  NewProjectSelectMaterial,
  NewProjectDisjuntorContainer,
  NewProjectLatitudeInput,
  NewProjectLongitudeInput,
  NewProjectLatitudeELongitudeContainer,
  NewProjectTotalPowerInput,
  NewProjectFileUploadInput,
  NewProjectUploadLabel,
  NewProjectInfoFormContainer,
  NewProjectSubmitButton
} from '../styled-components/NewProject'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import apiInstance from '@/utils/axios'
import { Response } from '@/actions'

const NovoProjeto = () => {
  const [typeOfPerson, setTypeOfPerson] = useState('Pessoa Fisica')
  const [nameOf, setNameOf] = useState('')
  const [numberOf, setNumberOf] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [concessionaria, setConcessionaria] = useState('')
  const [totalPowerInput, setTotalPowerInput] = useState('')
  const [selectedState, setSelectedState] = useState<string>('Estado');
  const [selectedDisjuntorType, setSelectedDisjuntorType] = useState<string>('Tipo de disjuntor');
  const [selectedDisjuntorValue, setSelectedDisjuntorValue] = useState<string>('Valor do disjuntor');
  const [selectedTitularidade, setSelectedTitularidade] = useState<string>('Trocar titularidade?');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Possui os materiais?');
  const [fileNameType, setFileNameType] = useState<string>('');
  const [fileNameCONTRATO, setFileNameCONTRATO] = useState<string>('');
  const [fileNamePower, setFileNamePower] = useState<string>('');
  const [files, setFiles] = useState<File[]>([]);
  const [errorCreate, setErrorCreate] = useState<string>('');
  const [successCreate, setSuccessCreate] = useState<string>('');

  
  const { currentUser, loading, error, jwt } = useFetchCurrentUser()

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
    const newFiles = Array.from(e.target.files);
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);

    // Update file names for display purposes
    if (e.target.id === 'file1') setFileNameType(newFiles[0].name);
    if (e.target.id === 'file2') setFileNameCONTRATO(newFiles[0].name);
    if (e.target.id === 'file3') setFileNamePower(newFiles[0].name);
  }
};

  const handleStateChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(e.target.value);
  };

  const handleDisjuntorTypeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisjuntorType(e.target.value);
  };

  const handleDisjuntorValueChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedDisjuntorValue(e.target.value);
  };

  const handleTitularidadeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedTitularidade(e.target.value);
  };

  const handleMaterialChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedMaterial(e.target.value);
  };

  const handleNameOfChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameOf(e.target.value);
  };

  const handleNumberOfChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOf(e.target.value);
  };

  const handleLatitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLatitude(e.target.value);
  };

  const handleLongitudeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLongitude(e.target.value);
  };
  
  const handleConcessionariaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setConcessionaria(e.target.value);
  };

  const handleTotalPowerChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTotalPowerInput(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    var cpf = '';
    var cnpj = '';
    if (typeOfPerson === 'Pessoa Fisica'){
      cpf = numberOf;
      var name = nameOf;
    } else {
      cnpj = numberOf;
      var name = nameOf;
    }

    const formData = new FormData();
    formData.append('project[name]', name);
    formData.append('project[cpf]', cpf);
    formData.append('project[cnpj]', cnpj);
    formData.append('project[estado]', selectedState);
    formData.append('project[concessionaria]', concessionaria);
    formData.append('project[latitude]', latitude);
    formData.append('project[longitude]', longitude);
    formData.append('project[tipo_disjuntor]', selectedDisjuntorType);
    formData.append('project[valor_disjuntor]', selectedDisjuntorValue);
    formData.append('project[total_power]', totalPowerInput);

    files.forEach((file, index) => {
      formData.append(`project[documents_attributes][${index}][file]`, file);
    });
    // const requestData = {
    //   "project":{
    //     name: name,
    //     cpf: cpf,
    //     cnpj: cnpj,
    //     estado: selectedState,
    //     concessionaria: concessionaria,
    //     latitude: latitude,
    //     longitude: longitude,
    //     tipo_disjuntor: selectedDisjuntorType,
    //     valor_disjuntor: selectedDisjuntorValue,
    //     total_power: totalPowerInput,
    //     documents: files }}

    try {
      const response:Response = await apiInstance.post('http://localhost:3001/projects', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${jwt}`
      }
    });

      if (response.status === 200) {
        // Handle success
        setSuccessCreate('Projeto criado com sucesso')
      } else {
        // Handle error
        setErrorCreate('Ocorreu um erro, tente novamente em instantes')
      }
    } catch (error) {
      setErrorCreate('Ocorreu um erro, tente novamente em instantes')
    }
  };
  
  const states = [
    { value: "Estado" },
    { value: "AC" },
    { value: "AL" },
    { value: "AP" },
    { value: "AM" },
    { value: "BA" },
    { value: "CE" },
    { value: "DF" },
    { value: "ES" },
    { value: "GO" },
    { value: "MA" },
    { value: "MT" },
    { value: "MS" },
    { value: "MG" },
    { value: "PA" },
    { value: "PB" },
    { value: "PR" },
    { value: "PE" },
    { value: "PI" },
    { value: "RJ" },
    { value: "RN" },
    { value: "RS" },
    { value: "RO" },
    { value: "RR" },
    { value: "SC" },
    { value: "SP" },
    { value: "SE" },
    { value: "TO" },
  ];

  const disjuntores = [
    {value: "Tipo de disjuntor"},
    { value: "Monofásico" },
    { value: "Bifásico" },
    { value: "Trifásico" },
  ];

  const valorDoDisjuntores = [
    {value: "Valor do disjuntor"},
    { value: "2A" },
    { value: "4A" },
    { value: "6A" },
    { value: "10A" },
    { value: "16A" },
    { value: "20A" },
    { value: "25A" },
    { value: "32A" },
    { value: "40A" },
    { value: "50A" },
    { value: "63A" },
    { value: "70A" },
    { value: "80A" },
    { value: "100A" },
    { value: "125A" },
    { value: "Outro" },
  ];

  const titularidade = [
    {value: "Trocar titularidade?"},
    { value: "Sim" },
    { value: "Não" }
  ];

  const material = [
    {value: "Possui os materiais?"},
    { value: "Sim" },
    { value: "Não" }
  ];

  return (
    <Container>
      <NewProjectContainer>
        <NewProjectHeader>
          <NewProjectHeaderTitle>NOVO PROJETO</NewProjectHeaderTitle>
          <NewProjectHeaderSubtitle>Crie um novo projeto de forma rápida</NewProjectHeaderSubtitle>
          <NewProjectHeaderLine />
        </NewProjectHeader>
        <NewProjectInfoFormContainer>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da Concessionária</NewProjectDetailsText>
            <NewProjectSelectContainer>
              <NewProjectSelect value={selectedState} onChange={handleStateChange}>
                {states.map((state) => (
                  <option
                    key={state.value}
                    value={state.value}
                    disabled={selectedState !== 'Estado' && state.value === 'Estado'}
                  >
                    {state.value}
                  </option>
                ))}
              </NewProjectSelect>
              <NewProjectInput type='text' name='concessionaria' placeholder='Digite a concessionária' value={concessionaria} onChange={handleConcessionariaChange} />
            </NewProjectSelectContainer>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações do Cliente</NewProjectDetailsText>
            <NewProjectTypeOfPersonButtonContainer>
              <NewProjectTypeOfPersonButton type='button' onClick={() => setTypeOfPerson('Pessoa Fisica')} $isactive={typeOfPerson === 'Pessoa Fisica'}>Pessoa Fisica</NewProjectTypeOfPersonButton>
              <NewProjectTypeOfPersonButton type='button' onClick={() => setTypeOfPerson('Pessoa Juridica')} $isactive={typeOfPerson === 'Pessoa Juridica'}>Pessoa Juridica</NewProjectTypeOfPersonButton>
            </NewProjectTypeOfPersonButtonContainer>
            <NewProjectCPFOrCNPJContainer>
              <NewProjectCPFOrCNPJInput type='text' name='numberOf' placeholder={typeOfPerson === 'Pessoa Fisica' ? 'CPF' : 'CNPJ'} value={numberOf} onChange={handleNumberOfChange} />
              <NewProjectNomeorRazaoSocialInput type='text' name='nameOf' placeholder={typeOfPerson === 'Pessoa Fisica' ? 'nome' : 'razao social'} value={nameOf} onChange={handleNameOfChange} />
            </NewProjectCPFOrCNPJContainer>
            <NewProjectUploadLabel htmlFor='file1'>
              <Image src={'upload.svg'} alt={'upload'} width={50} height={50} />
              {fileNameType ? fileNameType : (typeOfPerson === 'Pessoa Fisica' ? 'DOCUMENTO COM FOTO' : 'DOCUMENTO COM FOTO DO REPRESENTANTE')}</NewProjectUploadLabel>
            <NewProjectFileUploadInput type='file' name='file' id='file1' onChange={handleFileChange} />
            {typeOfPerson === 'Pessoa Juridica' &&  (
              <>
                <NewProjectUploadLabel htmlFor='file2'>
                  <Image src={'upload.svg'} alt={'upload'} width={50} height={50} />
                  {fileNameCONTRATO ? fileNameCONTRATO : 'Contrato Social'}
                </NewProjectUploadLabel>
                <NewProjectFileUploadInput type='file' name='file2' id='file2' onChange={handleFileChange} />
              </>
            )}
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da instalação - Unidade geradora</NewProjectDetailsText>
            <NewProjectDisjuntorContainer>
              <NewProjectSelectDisjuntorType value={selectedDisjuntorType} onChange={handleDisjuntorTypeChange}>
                {disjuntores.map((disjuntor) => (
                  <option
                    key={disjuntor.value}
                    value={disjuntor.value}
                    disabled={selectedDisjuntorType !== 'Tipo de disjuntor' && disjuntor.value === 'Tipo de disjuntor'}
                  >
                    {disjuntor.value}
                  </option>
                ))}
              </NewProjectSelectDisjuntorType>
              <NewProjectSelectDisjuntorValue value={selectedDisjuntorValue} onChange={handleDisjuntorValueChange}>
                {valorDoDisjuntores.map((valor) => (
                  <option
                    key={valor.value}
                    value={valor.value}
                    disabled={selectedDisjuntorValue !== 'Valor do disjuntor' && valor.value === 'Valor do disjuntor'}
                  >
                    {valor.value}
                  </option>
                ))}
              </NewProjectSelectDisjuntorValue>
            </NewProjectDisjuntorContainer>
            <NewProjectLatitudeELongitudeContainer>
              <NewProjectLatitudeInput type="text" name="latitude" placeholder="Latitude do projeto" value={latitude} onChange={handleLatitudeChange} />
              <NewProjectLongitudeInput type="text" name="longitude" placeholder="Longitude do projeto" value={longitude} onChange={handleLongitudeChange} />
            </NewProjectLatitudeELongitudeContainer>
            <NewProjectSelectTitularidade value={selectedTitularidade} onChange={handleTitularidadeChange}>
              {titularidade.map((titularidade) => (
                <option
                  key={titularidade.value}
                  value={titularidade.value}
                  disabled={selectedTitularidade !== 'Trocar titularidade?' && titularidade.value === 'Trocar titularidade?'}
                >
                  {titularidade.value}
                </option>
              ))}
            </NewProjectSelectTitularidade>
              <NewProjectUploadLabel htmlFor='file3'>
              <Image src={'upload.svg'} alt={'upload'} width={50} height={50} />
              {fileNamePower ? fileNamePower : "CONTA DE ENERGIA"}</NewProjectUploadLabel>
            <NewProjectFileUploadInput type='file' name='file' id='file3' onChange={handleFileChange} />
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Especificações do projeto</NewProjectDetailsText>
            <NewProjectTotalPowerInput type="text" placeholder='Potência total do projeto em kWp' value={totalPowerInput} onChange={handleTotalPowerChange} />
            <NewProjectSelectMaterial value={selectedMaterial} onChange={handleMaterialChange}>
              {material.map((material) => (
                <option
                  key={material.value}
                  value={material.value}
                  disabled={selectedMaterial !== 'Possui os materiais?' && material.value === 'Possui os materiais?'}
                >
                  {material.value}
                </option>
              ))}
            </NewProjectSelectMaterial>
          </NewProjectSection>
          <NewProjectSubmitButton type='submit' onClick={handleSubmit}>Enviar Projeto</NewProjectSubmitButton>
        </NewProjectInfoFormContainer>
      </NewProjectContainer>
    </Container>
  )
}

export default NovoProjeto
