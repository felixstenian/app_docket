import React from 'react'
import PropTypes from 'prop-types'

import { HeaderComponent } from '../../components/HeaderComponent'
import { FooterComponent } from '../../components/FooterComponent'

import { Container, Content } from './styles'

export function Layout ({ children }) {
  return (
    <Container>
        <HeaderComponent />
        <Content>
          {/* <HeaderPageComponent /> */}
          {children}
        </Content>
      <FooterComponent />
    </Container>
  )
}

Layout.propTypes = {
  children: PropTypes.element.isRequired
}
