import React, { useState, useEffect } from 'react'

import { FormComponent } from '../../components/FormComponent'
import { InputComponent } from '../../components/InputComponent'
import { LoadDocuments } from '../../components/LoadDocuments'
import { ToastAlertComponent } from '../../components/ToastAlertComponent'

import * as logic from './logic'

import { Container, Header, Content, ContentForm, ContentSolicitations, Loader } from './styles'
const { v4: uuidv4 } = require('uuid')

export function Main () {
  const [nameDoc, setNameDoc] = useState('')
  const [typePerson, setTypePerson] = useState('')
  const [cpfOrCnpj, setCpfOrCnpj] = useState('')
  const [nameOrRazao, setNameOrRazao] = useState('')
  const [cartorioZipCode, setCartorioZipCode] = useState('')
  const [cartorioRoad, setCartorioRoad] = useState('')
  const [cartorioNum, setCartorioNum] = useState('')
  const [cartorioCity, setCartorioCity] = useState('')
  const [cartorioState, setCartorioState] = useState('')

  const [errorMessage, setErrorMessage] = useState({})

  const [requests, setRequests] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleAdd = async (e) => {
    e.preventDefault()

    const body = {
      id: uuidv4(),
      nameDoc,
      typePerson,
      cpfOrCnpj: cpfOrCnpj.length === 11 ? cpfOrCnpj.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4') : cpfOrCnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5'),
      nameOrRazao,
      cartorioZipCode: cartorioZipCode.replace(/(\d{2})(\d{3})(\d{3})/g, '$1.$2-$3'),
      cartorioRoad,
      cartorioNum,
      cartorioCity,
      cartorioState,
      createdAt: new Date()
    }

    logic.handleRegister(
      body,
      setErrorMessage,
      setNameDoc,
      setTypePerson,
      setNameOrRazao,
      setCpfOrCnpj,
      setCartorioZipCode,
      setCartorioRoad,
      setCartorioNum,
      setCartorioCity,
      setCartorioState,
      setRequests,
      setShowToast,
      setLoading
    )
  }

  const handleConfirmDelete = (id) => {
    logic.handleDelete(id, setRequests, setLoading)
    setShowModal(false)
  }

  useEffect(() => {
    setLoading(true)
    logic.getRequests(setRequests, setLoading)
  }, [])

  useEffect(async () => {
    if (cartorioZipCode.length === 8) {
      logic.checkAddress(
        cartorioZipCode,
        setCartorioRoad,
        setCartorioCity,
        setCartorioState
      )
    }
  }, [cartorioZipCode])

  return (
    <Container>
      {loading && <Loader />}
      <ToastAlertComponent
        message='Documento excluido com sucesso'
        action='sucess'
        setShowToast={setShowToast}
        showToast={showToast}
      />
      <h1>Pedido #1</h1>
      <Header>
        <header>
          <h3>Lead: Documento para criar contato</h3>
          <article>
            <svg height="50" width="50">
              <circle cx="25" cy="25" r="6" fill="orange" />
            </svg>
            Em andamento
          </article>
        </header>
        <article>
          <strong>Observação:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </article>
        <div>
          <strong>Criado por: </strong> João da Silva
          <strong>Data de Criação: </strong> data
        </div>
      </Header>
      <Content>
        <ContentForm>
            <div>
              <h2>Adicionar documentos ao pedido</h2>
            </div>
          <FormComponent>
            <InputComponent
              type='text'
              label='Nome do documento'
              value={nameDoc}
              required
              onChange={e => setNameDoc(e.target.value)}
              errorMessage={errorMessage[1]?.nameDoc}
            />
            <InputComponent
              type='select'
              label='Tipo de pessoa'
              options={
                ['', 'Pessoa Física', 'Pessoa Juridica']
              }
              required
              value={typePerson}
              onChange={e => setTypePerson(e.target.value)}
              errorMessage={errorMessage[2]?.typePerson}
            />
            <InputComponent
              type='text'
              label={typePerson === 'Pessoa Juridica' ? 'CNPJ' : 'CPF'}
              name={typePerson === 'Pessoa Juridica' ? 'cnpj' : 'cpf'}
              value={cpfOrCnpj}
              required
              onChange={e => setCpfOrCnpj(e.target.value)}
              errorMessage={errorMessage[3]?.cpfOrCnpj}
            />
            <InputComponent
              type='text'
              label={typePerson === 'Pessoa Juridica' ? 'Razão Social' : 'Nome Completo'}
              name={typePerson === 'Pessoa Juridica' ? 'razao_social' : 'nome'}
              value={nameOrRazao}
              required
              onChange={e => setNameOrRazao(e.target.value)}
              errorMessage={errorMessage[4]?.nameOrRazao}
            />

            <h3>Dados do cartório</h3>
            <InputComponent
              type='number'
              label='CEP'
              value={cartorioZipCode}
              required
              onChange={e => setCartorioZipCode(e.target.value)}
              errorMessage={errorMessage[5]?.cartorioZipCode}
            />
            <InputComponent
              type='text'
              label='Rua'
              value={cartorioRoad}
              required
              onChange={e => setCartorioRoad(e.target.value)}
              errorMessage={errorMessage[6]?.cartorioRoad}
            />
            <InputComponent
              type='number'
              label='Número'
              value={cartorioNum}
              required
              onChange={e => setCartorioNum(e.target.value)}
              errorMessage={errorMessage[7]?.cartorioNum}
            />
            <InputComponent
              type='text'
              label='Cidade'
              value={cartorioCity}
              required
              onChange={e => setCartorioCity(e.target.value)}
              errorMessage={errorMessage[8]?.cartorioCity}
            />
            <InputComponent
              type='text'
              label='UF'
              value={cartorioState}
              required
              onChange={e => setCartorioState(e.target.value)}
              errorMessage={errorMessage[9]?.cartorioState}
            />

            <InputComponent
              type='submit'
              value='Criar documento'
              onClick={handleAdd}
            />
          </FormComponent>
        </ContentForm>

        <ContentSolicitations>
          <LoadDocuments
            requests={requests.length !== 0 ? requests : false}
            action={handleConfirmDelete}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </ContentSolicitations>
      </Content>
    </Container>
  )
}
