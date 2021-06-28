import React from 'react'
import PropTypes from 'prop-types'
import { FaRegCheckCircle } from 'react-icons/fa'

import { Container } from './styles'

export function ToastAlertComponent ({ message, showToast, setShowToast, action }) {
  if (showToast) {
    return (
      <Container>
          {action === 'sucess' && <FaRegCheckCircle />}
          <h4>{message}</h4>
          <a onClick={() => setShowToast(false)}>X</a>
      </Container>
    )
  } else {
    return (
      <></>
    )
  }
}

ToastAlertComponent.propTypes = {
  message: PropTypes.string.isRequired,
  showToast: PropTypes.bool.isRequired,
  setShowToast: PropTypes.func.isRequired,
  action: PropTypes.string.isRequired
}
