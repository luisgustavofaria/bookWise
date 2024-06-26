import { Binoculars, ChartLineUp, SignOut, User } from '@phosphor-icons/react'
import Image from 'next/image'
import styled from 'styled-components'

const NavBarContainer = styled.div`
  background: ${(props) => props.theme.colors.gray[700]};
  width: 232px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 12px;
`

const Logo = styled.div`
  background: ${(props) => props.theme.colors.gray[700]};
  margin-top: 40px;
  margin-bottom: 64px;
  img {
    background: ${(props) => props.theme.colors.gray[700]};
  }
`

const MenuPage = styled.div`
  background: ${(props) => props.theme.colors.gray[700]};
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Page = styled.div`
  background: ${(props) => props.theme.colors.gray[700]};
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;

  span {
    background: ${(props) => props.theme.colors.gray[700]};
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }

  svg {
    background: ${(props) => props.theme.colors.gray[700]};
    color: ${(props) => props.theme.colors.gray[400]};
  }

  :first-child {
    background: ${(props) => props.theme.colors.gray[700]};
    width: 4px;
    height: 24px;
    border-radius: 999px;
  }

  /* &:hover div:first-child {
    background: ${(props) => props.theme.colors['gradient-vertical']};
  } */
  &:hover {
    svg {
      color: ${(props) => props.theme.colors.gray[100]};
    }
    span {
      color: ${(props) => props.theme.colors.gray[100]};
    }
  }
`

const Profile = styled.div`
  background: ${(props) => props.theme.colors.gray[700]};
  display: flex;
  align-items: center;
  margin-top: auto;
  gap: 16px;
  margin-bottom: 24px;
  cursor: pointer;

  > :first-child {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
  }

  span {
    background: ${(props) => props.theme.colors.gray[700]};
    color: ${(props) => props.theme.colors.gray[200]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }
  svg {
    background: ${(props) => props.theme.colors.gray[700]};
  }
`

export default function NavBar() {
  return (
    <NavBarContainer>
      <Logo>
        <Image
          width={128}
          height={32}
          alt="logo"
          src="/logo.png"
          priority
          quality={100}
        />
      </Logo>
      <MenuPage>
        <Page>
          <div></div>
          <ChartLineUp size={32} />
          <span>Início</span>
        </Page>
        <Page>
          <div></div>
          <Binoculars size={32} />
          <span>Explorar</span>
        </Page>
        <Page>
          <div></div>
          <User size={32} />
          <span>Perfil</span>
        </Page>
      </MenuPage>
      <Profile>
        <div></div>
        <span>NomePerfil</span>
        <SignOut size={32} color="#F75A68" />
      </Profile>
    </NavBarContainer>
  )
}
