import type { NextPage, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { fetchAllCrews } from '../lib/client'
import { CrewList } from '../components/layout'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Crews: NextPage<PageProps> = ({ crews }) => {
  return (
    <div>
      <Head>
        <title>Space X Crew</title>
        <meta name='description' content='SpaceX Crew List' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <CrewList crews={crews} />
    </div>
  )
}

export const getStaticProps = async () => {
  const crews = await fetchAllCrews()

  // Pass post data to the page via props
  return { props: { crews } }
}

export default Crews
