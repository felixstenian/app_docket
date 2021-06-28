import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

export function FormComponent ({ children }) {
  return (
    <Container>
        {children}
    </Container>
  )
}

FormComponent.propTypes = {
  children: PropTypes.array.isRequired
}
