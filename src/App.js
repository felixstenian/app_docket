import React from 'react'
import { Layout } from './pages/Layout'

import Main from './pages/Main'

import GlobalStyles from './styles/global'

export function App () {
  return (
    <Layout>
      <Main />
      <GlobalStyles/>
    </Layout>
  )
}
