import { styled } from 'goober'

export const Title = styled('h1')`
  font-size: 2em;
  padding: 0.5em;
`

export const Container = styled('main')`
  margin: 0 auto;
  max-width: 60em;
`

export const Footer = styled('footer')`
  padding: 2em;
  text-align: center;
`

export const FooterText = styled('p')`
  font-size: 1em;
`

export const FooterLink = styled('a')`
  color: royalblue;
`

export const GalleryList = styled('div')`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 1em;
  @media screen and (max-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 0.5em;
  }
  @media screen and (max-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 0em;
  }
`

export const GalleryItem = styled('div')``

export const SiteLogo = styled('a')`
  font-size: 2em;
  font-weight: 200;
  font-family: monospace, sans-serif;
  &:any-link {
    color: #eeeeee;
    text-decoration: none;
  }
`

export const Header = styled('header')`
  padding: 1em;
  text-align: center;
`

export const Avatar = styled('figure')`
  display: flex;
  flex-direction: column;
`

export const AvatarCaption = styled('figcaption')`
  text-align: center;
  font-size: 1em;
  padding: 0.5em;
`

export const ProfileWrapper = styled('article')`
  padding: 1em;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media screen and (max-width: 50em) {
    flex-direction: column;
  }
`

export const ProfileImage = styled('div')`
  width: 30em;
  flex: 1;

  @media screen and (max-width: 50em) {
    width: 100%;
  }
`

export const ProfileContent = styled('div')`
  padding: 1em;
  display: flex;
  flex: 1;
  flex-direction: column;
`

export const ProfileTitle = styled('h1')`
  font-size: 2em;
`

export const ProfileText = styled('p')`
  font-size: 1.5em;
  padding: 0.25em 0;
`

export const ProfileSubText = styled('p')`
  font-size: 1em;
  padding: 0.25em 0;
`

export const ProfileLink = styled('a')`
  color: royalblue;
  text-decoration: none;
  &:visited {
    color: plum;
  }
`

export const ProfileLine = styled('hr')`
  border: 2px solid #eeeeee;
  margin: 0.5em 0;
  padding: 0em;
`
