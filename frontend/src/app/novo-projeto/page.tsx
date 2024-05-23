'use client'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import { Container } from '../styled-components/GeneralStyle'
import { NewProjectCPFOrCNPJContainer, NewProjectCPFOrCNPJInput, NewProjectContainer, NewProjectDetailsText, NewProjectSelectDisjuntorValue, NewProjectHeader, NewProjectHeaderLine, NewProjectHeaderSubtitle, NewProjectHeaderTitle, NewProjectInfoContainer, NewProjectInput, NewProjectNomeorRazaoSocialInput, NewProjectSection, NewProjectSelect, NewProjectSelectContainer, NewProjectSelectDisjuntorType, NewProjectSelectTitularidade, NewProjectTypeOfPersonButton, NewProjectTypeOfPersonButtonContainer, NewProjectSelectMaterial, NewProjectDisjuntorContainer, NewProjectLatitudeInput, NewProjectLongitudeInput, NewProjectLatitudeELongitudeContainer } from '../styled-components/NewProject'
import { useState } from 'react'

const NovoProjeto = () => {
  const [typeOfPerson, setTypeOfPerson] = useState('Pessoa Fisica')
  const [selectedState, setSelectedState] = useState('');
  const {currentUser, loading, error} = useFetchCurrentUser()
  const states = [
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
    { value: "Monofásico"},
    { value: "Bifásico"},
    { value: "Trifásico" },
  ]
  const valorDoDisjuntores = [
    { value: "2A"},
    { value: "4A"},
    { value: "6A"},
    { value: "10A"},
    { value: "16A"},
    { value: "20A"},
    { value: "25A"},
    { value: "32A"},
    { value: "40A"},
    { value: "50A"},
    { value: "63A"},
    { value: "70A"},
    { value: "80A"},
    { value: "100A"},
    { value: "125A"},
    { value: "Outro"}
  ]
  const titularidade = [
    { value: "Sim"},
    { value: "Não"}
  ]

  return (
    <Container>
      <NewProjectContainer>
        <NewProjectHeader>
          <NewProjectHeaderTitle>NOVO PROJETO</NewProjectHeaderTitle>
          <NewProjectHeaderSubtitle>Crie um novo projeto de forma rápida</NewProjectHeaderSubtitle>
          <NewProjectHeaderLine/>
        </NewProjectHeader>
        <NewProjectInfoContainer>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da Concessionária</NewProjectDetailsText>
            <NewProjectSelectContainer>
              <NewProjectSelect value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
                <option selected disabled>Estado</option>
                {states.map((state) => (
                  <option key={state.value} value={state.value}>
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
              <NewProjectCPFOrCNPJInput type='text' name='numberOf' placeholder={ typeOfPerson === 'Pessoa Fisica' ? 'CPF' : 'CNPJ' }/>
              <NewProjectNomeorRazaoSocialInput type='text' name='nameOf' placeholder={ typeOfPerson === 'Pessoa Fisica' ? 'nome' : 'razao social' }/>
            </NewProjectCPFOrCNPJContainer>
            {/* adicionar upload de arquivo */}
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da instalação - Unidade geradora</NewProjectDetailsText>
            <NewProjectDisjuntorContainer>
              <NewProjectSelectDisjuntorType>
                <option selected disabled>Tipo de disjuntor</option>
                {disjuntores.map((disjuntor) => (
                  <option key={disjuntor.value} value={disjuntor.value}>
                    {disjuntor.value}
                  </option>
                ))}
              </NewProjectSelectDisjuntorType>
              <NewProjectSelectDisjuntorValue >
                <option selected disabled>Valor do disjuntor</option>
                {valorDoDisjuntores.map((valor) => (
                  <option key={valor.value} value={valor.value} >
                    {valor.value}
                  </option>
                ))}
              </NewProjectSelectDisjuntorValue>
            </NewProjectDisjuntorContainer>
            <NewProjectLatitudeELongitudeContainer>
              <NewProjectLatitudeInput type="text" name="latitude" placeholder="Latitude do projeto" />
              <NewProjectLongitudeInput type="text" name="longitude" placeholder="Longitude do projeto" />
            </NewProjectLatitudeELongitudeContainer>
            <NewProjectSelectTitularidade >
              <option selected disabled>Trocar titularidade?</option>
              {titularidade.map((titularidade) => (
                <option key={titularidade.value} value={titularidade.value}>
                  {titularidade.value}
                </option>
              ))}
            </NewProjectSelectTitularidade>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Especificações do projeto</NewProjectDetailsText>
            <input type="text" placeholder='Potência total do projeto em kWp' />
            <NewProjectSelectMaterial >
              <option selected disabled>Possui os materias?</option>
              <option value="Sim">Sim</option>
              <option value="Não">Não</option>
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