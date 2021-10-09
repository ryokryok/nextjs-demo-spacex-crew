import { ReactElement, createElement } from 'react'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { setup } from 'goober'

function MyApp({ Component, pageProps }: AppProps) {
  setup(createElement)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

function Layout({ children }: { children: ReactElement }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}

export default MyApp
