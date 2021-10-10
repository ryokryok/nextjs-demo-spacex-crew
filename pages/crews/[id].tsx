import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import { CrewProfile } from '../../components/layout'
import { fetchAllCrews, fetchCrew, fetchLaunch } from '../../lib/client'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Crew: NextPage<PageProps> = ({ crew, launches }) => {
  return (
    <div>
      <Head>
        <title>Space X Crew | {crew.name}</title>
        <meta name='description' content={`SpaceX Crew, about ${crew.name}`} />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <CrewProfile crew={crew} launches={launches} />
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const crews = await fetchAllCrews()
  const paths = crews.map((crew) => ({
    params: { id: crew.id },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const crewId = context.params?.id as string
  const crew = await fetchCrew(crewId)
  const launches = await Promise.all(crew.launches.map(async (launch) => await fetchLaunch(launch)))

  // Pass post data to the page via props
  return { props: { crew, launches } }
}

export default Crew
