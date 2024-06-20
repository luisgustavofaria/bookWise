import NavBar from '@/components/NavBar'
import { Binoculars, ChartLineUp, SignOut, User } from '@phosphor-icons/react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
  height: 100vh;
`

const ContainerMain = styled.div`
  padding: 52px 96px 0 96px;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  span {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    line-height: ${(props) => props.theme.lineHeights.short};
  }

  svg {
    color: ${(props) => props.theme.colors.green[100]};
  }
`

export default function Home() {
  return (
    <Container>
      <NavBar />
      <ContainerMain>
        <Item>
          <ChartLineUp size={32} />
          <span>Início</span>
        </Item>
      </ContainerMain>
    </Container>
  )
}
