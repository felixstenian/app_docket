import React from 'react'
import PropTypes from 'prop-types'

import { InputComponent } from '../InputComponent'

import { ModalContainer, ModalHeader, Actions } from './styles'

export function ModalComponent ({ children, title, showModal, setShowModal, actionConfirm }) {
  if (showModal) {
    return (
            <ModalContainer>
                <ModalHeader>
                    <h3>{title}</h3>
                    <a onClick={() => setShowModal(false)}>X</a>
                </ModalHeader>
                <div>{children}</div>
                <Actions>
                  <div>
                    <InputComponent
                      type="submit"
                      value="Excluir"
                      onClick={actionConfirm}
                      color='#FF0000'
                    />
                    <InputComponent
                      type="submit"
                      value="Cancelar"
                      onClick={() => setShowModal(false)}
                      color='#FFF'
                      colorText='#3570b2'
                    />
                  </div>
                </Actions>
            </ModalContainer>
    )
  } else {
    return (
          <></>
    )
  }
}

ModalComponent.propTypes = {
  children: PropTypes.any.isRequired,
  title: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  actionConfirm: PropTypes.func
}
