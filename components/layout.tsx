import Link from 'next/link'
import React, { ReactElement } from 'react'
import Image from 'next/image'

import { CrewType } from '../lib/types'
import {
  Avatar,
  AvatarCaption,
  Container,
  GalleryItem,
  GalleryList,
  Header,
  SiteLogo,
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
    </>
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

export function CrewItem({ crew }: { crew: CrewType }) {
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
