import Link from 'next/link'
import React, { ReactElement } from 'react'
import Image from 'next/image'

import dayjs from 'dayjs'

import { CrewType, LaunchType } from '../lib/types'
import {
  Avatar,
  AvatarCaption,
  Container,
  GalleryItem,
  GalleryList,
  Header,
  ProfileContent,
  ProfileImage,
  ProfileLine,
  ProfileLink,
  ProfileSubText,
  ProfileText,
  ProfileTitle,
  ProfileWrapper,
  SiteLogo,
  Footer,
  FooterText,
  FooterLink,
} from './style'

export function CommonLayout({ children }: { children: ReactElement[] }) {
  return (
    <>
      <Header>
        <Link href='/' passHref>
          <SiteLogo>SpaceX crews</SiteLogo>
        </Link>
      </Header>
      <Container>{children}</Container>
      <CreditFooter />
    </>
  )
}

function CreditFooter() {
  return (
    <Footer>
      <FooterText>
        Made by <FooterLink href='https://github.com/ryokryok'>Mr_ozin</FooterLink>
      </FooterText>
      <FooterText>
        Powered by <FooterLink href='https://github.com/r-spacex/SpaceX-API'>r/SpaceX</FooterLink>
      </FooterText>
    </Footer>
  )
}

export function CrewList({ crews }: { crews: CrewType[] }) {
  return (
    <GalleryList>
      {crews.map((crew) => {
        return <CrewItem crew={crew} key={crew.id} />
      })}
    </GalleryList>
  )
}

function CrewItem({ crew }: { crew: CrewType }) {
  return (
    <GalleryItem>
      <Link href={`/crews/${crew.id}`} passHref>
        <Avatar>
          <Image src={crew.image} alt={crew.name} height='320' width='320' objectFit={'cover'} />
          <AvatarCaption>{crew.name}</AvatarCaption>
        </Avatar>
      </Link>
    </GalleryItem>
  )
}

export function CrewProfile({ crew, launches }: { crew: CrewType; launches: LaunchType[] }) {
  return (
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
        <ProfileLine />
        <ProfileText>Mission</ProfileText>

        {launches.map((launch) => {
          return <LaunchCard key={launch.id} launch={launch} />
        })}
      </ProfileContent>
    </ProfileWrapper>
  )
}

function LaunchCard({ launch }: { launch: LaunchType }) {
  return (
    <ProfileWrapper>
      {launch.links.patch.small ? (
        <Image src={launch.links.patch.small} alt={launch.name} width={150} height={150} />
      ) : (
        <></>
      )}
      <ProfileContent>
        <ProfileText>{launch.name}</ProfileText>
        <ProfileSubText>{dayjs(launch.date_utc).format('YYYY-MM-DD')}</ProfileSubText>
        <ProfileSubText>
          {launch.links.webcast ? (
            <ProfileLink href={launch.links.webcast}>watch Youtube live</ProfileLink>
          ) : (
            <></>
          )}
        </ProfileSubText>
        <ProfileSubText>
          {launch.links.article ? (
            <ProfileLink href={launch.links.article}>Read article</ProfileLink>
          ) : (
            <></>
          )}
        </ProfileSubText>
      </ProfileContent>
    </ProfileWrapper>
  )
}
