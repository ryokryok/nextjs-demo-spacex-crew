import type { NextPage, InferGetStaticPropsType, GetStaticPaths, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {
  ProfileWrapper,
  ProfileImage,
  ProfileContent,
  ProfileText,
  ProfileSubText,
  ProfileLink,
  ProfileTitle,
} from '../../components/style'
import { fetchAllCrews, fetchCrew } from '../../lib/client'

type PageProps = InferGetStaticPropsType<typeof getStaticProps>

const Crew: NextPage<PageProps> = ({ crew }) => {
  return (
    <div>
      <Head>
        <title>Space X Crew | {crew.name}</title>
        <meta name='description' content={`SpaceX Crew, about ${crew.name}`} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ProfileWrapper>
        <ProfileImage>
          <Image src={crew.image} alt={crew.name} height={800} width={600} objectFit={'cover'} />
        </ProfileImage>
        <ProfileContent>
          <ProfileTitle>{crew.name}</ProfileTitle>
          <ProfileText>Agency: {crew.agency}</ProfileText>
          <ProfileSubText>Status: {crew.status}</ProfileSubText>
          <ProfileSubText>
            <ProfileLink href={crew.wikipedia}>Wikipedia</ProfileLink>
          </ProfileSubText>
        </ProfileContent>
      </ProfileWrapper>
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

  // Pass post data to the page via props
  return { props: { crew } }
}

export default Crew
