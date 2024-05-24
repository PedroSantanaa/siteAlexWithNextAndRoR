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
  NewProjectInfoContainer,
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
  NewProjectUploadLabel
} from '../styled-components/NewProject'
import { ChangeEvent, useState } from 'react'
import Image from 'next/image'

const NovoProjeto = () => {
  const [typeOfPerson, setTypeOfPerson] = useState('Pessoa Fisica')
  const [selectedState, setSelectedState] = useState<string>('Estado');
  const [selectedDisjuntorType, setSelectedDisjuntorType] = useState<string>('Tipo de disjuntor');
  const [selectedDisjuntorValue, setSelectedDisjuntorValue] = useState<string>('Valor do disjuntor');
  const [selectedTitularidade, setSelectedTitularidade] = useState<string>('Trocar titularidade?');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('Possui os materiais?');
  const [fileNameType, setFileNameType] = useState<string>('');
  const [fileNameCONTRATO, setFileNameCONTRATO] = useState<string>('');
  
  const { currentUser, loading, error } = useFetchCurrentUser()

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

  const handleFileChangeType = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFileNameType(file.name); // Atualiza o estado com o nome do arquivo selecionado
    }
  };
  
  const handleFileChangeCONTRATO = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setFileNameCONTRATO(file.name); // Atualiza o estado com o nome do arquivo selecionado
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
        <NewProjectInfoContainer>
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
              <NewProjectInput type='text' name='concessionaria' placeholder='Digite a concessionária'></NewProjectInput>
            </NewProjectSelectContainer>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações do Cliente</NewProjectDetailsText>
            <NewProjectTypeOfPersonButtonContainer>
              <NewProjectTypeOfPersonButton onClick={() => setTypeOfPerson('Pessoa Fisica')} $isactive={typeOfPerson === 'Pessoa Fisica'}>Pessoa Fisica</NewProjectTypeOfPersonButton>
              <NewProjectTypeOfPersonButton onClick={() => setTypeOfPerson('Pessoa Juridica')} $isactive={typeOfPerson === 'Pessoa Juridica'}>Pessoa Juridica</NewProjectTypeOfPersonButton>
            </NewProjectTypeOfPersonButtonContainer>
            <NewProjectCPFOrCNPJContainer>
              <NewProjectCPFOrCNPJInput type='text' name='numberOf' placeholder={typeOfPerson === 'Pessoa Fisica' ? 'CPF' : 'CNPJ'} />
              <NewProjectNomeorRazaoSocialInput type='text' name='nameOf' placeholder={typeOfPerson === 'Pessoa Fisica' ? 'nome' : 'razao social'} />
            </NewProjectCPFOrCNPJContainer>
            <NewProjectUploadLabel htmlFor='file1'>
              <Image src={'upload.svg'} alt={'upload'} width={50} height={50} />
              {fileNameType ? fileNameType : (typeOfPerson === 'Pessoa Fisica' ? 'DOCUMENTO COM FOTO' : 'DOCUMENTO COM FOTO DO REPRESENTANTE')}</NewProjectUploadLabel>
            <NewProjectFileUploadInput type='file' name='file' id='file1' onChange={handleFileChangeType} />
            {typeOfPerson === 'Pessoa Juridica' &&  (
              <>
                <NewProjectUploadLabel htmlFor='file2'>
                  <Image src={'upload.svg'} alt={'upload'} width={50} height={50} />
                  {fileNameCONTRATO ? fileNameCONTRATO : 'Contrato Social'}
                </NewProjectUploadLabel>
                <NewProjectFileUploadInput type='file' name='file2' id='file2' onChange={handleFileChangeCONTRATO} />
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
              <NewProjectLatitudeInput type="text" name="latitude" placeholder="Latitude do projeto" />
              <NewProjectLongitudeInput type="text" name="longitude" placeholder="Longitude do projeto" />
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
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Especificações do projeto</NewProjectDetailsText>
            <NewProjectTotalPowerInput type="text" placeholder='Potência total do projeto em kWp' />
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
          <NewProjectSection>
            <NewProjectDetailsText>Documentos complementares (opcional)</NewProjectDetailsText>
          </NewProjectSection>
        </NewProjectInfoContainer>
      </NewProjectContainer>
    </Container>
  )
}

export default NovoProjeto
