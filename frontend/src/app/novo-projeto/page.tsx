'use client'
import { useFetchCurrentUser } from '@/hooks/useFetchCurrentUser'
import { Container } from '../styled-components/GeneralStyle'
import { NewProjectContainer, NewProjectDetailsText, NewProjectHeader, NewProjectHeaderLine, NewProjectHeaderSubtitle, NewProjectHeaderTitle, NewProjectInfoContainer, NewProjectSection } from '../styled-components/NewProject'

const NovoProjeto = () => {
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
            <select>
              {states.map((state) => (
                <option key={state.value} value={state.value}>
                  {state.value}
                </option>
            ))}
            </select>
            <input type='text' name='concessionaria' placeholder='Digite a concessionária'></input>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações do Cliente</NewProjectDetailsText>
            <div>
              <button>Pessoa Fisica</button>
              <button>Pessoa Jurifica</button>
            </div>
            <div>
              <input type='text' name='numberOf' placeholder='CPF ou CNPJ'/>
              <input type='text' name='nameOf' placeholder='nome ou razao social'/>
            </div>
            {/* adicionar upload de arquivo */}
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Informações da instalação - Unidade geradora</NewProjectDetailsText>
          </NewProjectSection>
          <NewProjectSection>
            <NewProjectDetailsText>Especificações do projeto</NewProjectDetailsText>
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