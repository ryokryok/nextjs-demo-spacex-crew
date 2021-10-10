import React, { createElement } from 'react'
import type { AppProps } from 'next/app'
import { setup } from 'goober'
import { createGlobalStyles } from 'goober/global'
import { CommonLayout } from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  setup(createElement)
  return (
    <CommonLayout>
      <GlobalStyles />
      <Component {...pageProps} />
    </CommonLayout>
  )
}

const GlobalStyles = createGlobalStyles`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing:  border-box;
  }

  html  {
    background-color: #111111;
    color:  #eeeeee;
  }
`

export default MyApp
