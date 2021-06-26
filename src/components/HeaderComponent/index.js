import React from 'react'

import logo from '../../assets/Logo-branco_baixa.png'

import { Header } from './styles'

export function HeaderComponent () {
  return (
    <Header>
      <img src={logo} alt='logo docket' />
    </Header>
  )
}
