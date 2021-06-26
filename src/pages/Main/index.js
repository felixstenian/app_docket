import React, { useState } from 'react'

import { FormComponent } from '../../components/FormComponent'
import { InputComponent } from '../../components/InputComponent'

import { Container, Header, Content, ContentForm, ContentSolicitations } from './styles'

function Main () {
  const [nameDoc, setNameDoc] = useState('')
  const [typePerson, setTypePerson] = useState('')
  const [cpfOrCnpj, setCpfOrCnpj] = useState('')
  const [nameOrRazao, setNameOrRazao] = useState('')

  return (
    <Container>
      <Header>
        Lead: Documento para criar contato
      </Header>
      <Content>
        <ContentForm>
          <FormComponent>
            <div>
              <h1>Adicionar documentos ao pedido</h1>
            </div>
            <InputComponent
              type='text'
              label='Nome do documento'
              value={nameDoc}
              required
              onChange={e => setNameDoc(e.target.value)}
            />
            <InputComponent
              type='select'
              label='Tipo de pessoa'
              options={
                ['Pessoa Física', 'Pessoa Juridica']
              }
              required
              value={typePerson}
              onChange={e => setTypePerson(e.target.value)}
            />
            <InputComponent
              type='text'
              label={typePerson === 'Pessoa Juridica' ? 'CNPJ' : 'CPF'}
              name={typePerson === 'Pessoa Juridica' ? 'cnpj' : 'cpf'}
              value={cpfOrCnpj}
              required
              onChange={e => setCpfOrCnpj(e.target.value)}
            />
            <InputComponent
              type='text'
              label={typePerson === 'Pessoa Juridica' ? 'Razão Social' : 'Nome Completo'}
              name={typePerson === 'Pessoa Juridica' ? 'razao_social' : 'nome'}
              value={nameOrRazao}
              required
              onChange={e => setNameOrRazao(e.target.value)}
            />
          </FormComponent>
        </ContentForm>
        <ContentSolicitations>
          Solicitações
        </ContentSolicitations>
      </Content>
    </Container>
  )
}

export default Main
