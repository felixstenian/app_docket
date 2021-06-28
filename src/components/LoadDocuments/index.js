import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { IoDocumentTextOutline } from 'react-icons/io5'
import { FiTrash } from 'react-icons/fi'
import moment from 'moment'

import { ModalComponent } from '../ModalComponent'

import { Container, Card, CardEmpty } from './styles'

moment.locale('pt')
moment.updateLocale('pt', {
  months: [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ]
})

export function LoadDocuments ({ requests, action, showModal, setShowModal }) {
  const [itemSelect, setItemSelect] = useState()

  const handleTrash = (id) => {
    setShowModal(true)
    setItemSelect(id)
  }

  return (
      <Container>
        <h4>{requests
          ? requests.length > 1
            ? `${requests.length} documentos solicitados`
            : `${requests.length} documento solicitado`
          : ''
        }
        </h4>
          {
            requests
              ? requests.map((item, index) => {
                return (
                  <Card key={index}>
                    <header>
                      <h2>{item.nameDoc}</h2>
                      <button
                        onClick={() => handleTrash(item.id)}
                      >
                        <FiTrash />
                      </button>
                    </header>
                    <div>
                      <article>
                        <strong>{item.typePerson}</strong>
                        <p>{item.typePerson === 'PF' ? 'Nome: ' : 'Razão Social: '}{item.nameOrRazao}</p>
                        <p>{item.typePerson === 'PF' ? 'CPF: ' : 'CNPJ: '}{item.cpfOrCnpj}</p>
                      </article>
                      <article>
                        <div>
                          <strong>Dados do cartório</strong>
                        </div>
                        <div>
                          <p>CEP: {item.cartorioZipCode}</p>
                        </div>
                        <div>
                          <p>Rua: {item.cartorioRoad}</p>
                          <p>N: {item.cartorioNum}</p>
                        </div>
                        <div>
                          <p>Cidade: {item.cartorioCity}</p>
                          <p>UF: {item.cartorioState}</p>
                        </div>
                      </article>
                    </div>
                    <p><strong>Data de criação: </strong>{moment(item.createdAt).utc('America/SP').format('DD [de] MMMM [de] YYYY')}</p>
                  </Card>
                )
              })
              : <CardEmpty>
                  <div>
                    <IoDocumentTextOutline />
                  </div>
                  <p>Nenhum documento criado</p>
              </CardEmpty>
          }

          <ModalComponent
              title="Confirmar exclusão"
              showModal={showModal}
              setShowModal={setShowModal}
              actionConfirm={() => action(itemSelect)}
          >
            <p>Tem certeza que deseja excluir este documento ?</p>
          </ModalComponent>
      </Container>
  )
}

LoadDocuments.propTypes = {
  requests: PropTypes.any.isRequired,
  action: PropTypes.func,
  showModal: PropTypes.bool,
  setShowModal: PropTypes.func
}
