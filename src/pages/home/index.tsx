import NavBar from '@/components/NavBar'
import {
  Binoculars,
  CaretRight,
  ChartLineUp,
  SignOut,
  Star,
  User,
} from '@phosphor-icons/react'
import Image from 'next/image'
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

const Page = styled.div`
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

const MyBooks = styled.div`
  margin-top: 40px;
  width: 608px;
`

const Title = styled.div`
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-right: 8px;
  }
  > div > span {
    color: ${(props) => props.theme.colors.purple[100]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    line-height: ${(props) => props.theme.lineHeights.base};
  }

  > div > svg {
    color: ${(props) => props.theme.colors.purple[100]};
  }
`

const BookCard = styled.div`
  margin-top: 16px;
  background-color: ${(props) => props.theme.colors.gray[600]};
  padding: 20px 24px;
  border-radius: 8px;
  display: flex;
  gap: 24px;

  div,
  span,
  svg {
    background-color: ${(props) => props.theme.colors.gray[600]};
  }
`

const Book = styled.div`
  position: relative;
  width: 108px;
  height: 152px;
  border-radius: 4px;

  img {
    border-radius: 4px;
    width: 100%;
  }
`

const BookDetails = styled.div`
  flex: 1;
`

const MainInfo = styled.div``

const MyInfo = styled.div`
  display: flex;
  justify-content: space-between;

  > span {
    color: ${(props) => props.theme.colors.gray[300]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }

  svg {
    color: ${(props) => props.theme.colors.purple[100]};
  }
`

const TitleInfo = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
`

const BookTitle = styled.span`
  color: ${(props) => props.theme.colors.gray[100]};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  line-height: ${(props) => props.theme.lineHeights.short};
`

const BookAuthor = styled.span`
  color: ${(props) => props.theme.colors.gray[400]};
  font-size: ${(props) => props.theme.fontSizes.sm};
  font-weight: ${(props) => props.theme.fontWeights.regular};
  line-height: ${(props) => props.theme.lineHeights.base};
`

const Opinion = styled.div`
  margin-top: 24px;

  span {
    color: ${(props) => props.theme.colors.gray[300]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }
`

export default function Home() {
  return (
    <Container>
      <NavBar />
      <ContainerMain>
        <Page>
          <ChartLineUp size={32} />
          <span>Início</span>
        </Page>
        <div>
          <div>
            <MyBooks>
              <Title>
                <span>Sua última leitura</span>
                <div>
                  <span>Ver todas</span>
                  <CaretRight size={16} />
                </div>
              </Title>
              <BookCard>
                <Book>
                  <Image src="/books/entendendo-algoritmos.png" fill alt="" />
                </Book>
                <BookDetails>
                  <MainInfo>
                    <MyInfo>
                      <span>Há 2 dias</span>
                      <div>
                        <Star size={16} weight="fill" />
                        <Star size={16} weight="fill" />
                        <Star size={16} weight="fill" />
                        <Star size={16} weight="fill" />
                        <Star size={16} />
                      </div>
                    </MyInfo>
                    <TitleInfo>
                      <BookTitle>Entendendo Algoritmos</BookTitle>
                      <BookAuthor>Aditya Bhargava</BookAuthor>
                    </TitleInfo>
                  </MainInfo>
                  <Opinion>
                    <span>
                      Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                      sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                      lectu...
                    </span>
                  </Opinion>
                </BookDetails>
              </BookCard>
            </MyBooks>
            <div></div>
          </div>
          <div>Livros Populares</div>
        </div>
      </ContainerMain>
    </Container>
  )
}
