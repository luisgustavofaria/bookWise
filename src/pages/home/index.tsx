import NavBar from '@/components/NavBar'
import {
  Binoculars,
  CaretRight,
  ChartLineUp,
  SignOut,
  Star,
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

const PageHeader = styled.div`
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
const MainStyles = styled.div`
  display: flex;
  gap: 64px;
`

const MyBooks = styled.div`
  margin-top: 40px;
  width: 608px;
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const MainInfo = styled.div``

const MyInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;

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

const OtherBooks = styled.div`
  //border: solid 1px red;
  margin-top: 40px;
  width: 608px;
`

const List = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`
const Comment = styled.div`
  background-color: ${(props) => props.theme.colors.gray[600]};
  border-radius: 8px;
  padding: 24px;
  div,
  a,
  span,
  svg {
    background-color: ${(props) => props.theme.colors.gray[600]};
  }
`
const Header = styled.div`
  display: flex;
  gap: 16px;

  > :first-child {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
  }

  svg {
    color: ${(props) => props.theme.colors.purple[100]};
  }
`
const User = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  :first-child {
    color: ${(props) => props.theme.colors.gray[100]};
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }
  :last-child {
    color: ${(props) => props.theme.colors.gray[400]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};
  }
`

const Frame1 = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 32px;
`
const Frame2 = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > :last-child {
    color: ${(props) => props.theme.colors.gray[300]};
    font-size: ${(props) => props.theme.fontSizes.sm};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    line-height: ${(props) => props.theme.lineHeights.base};

    a {
      color: ${(props) => props.theme.colors.purple[100]};
      font-weight: ${(props) => props.theme.fontWeights.bold};
    }
  }
`

const TrendingBooks = styled.div`
  //border: solid 1px red;
  margin-top: 40px;
  width: 324px;
  display: flex;
  flex-direction: column;

  svg {
    color: ${(props) => props.theme.colors.purple[100]};
  }
`

const ShorterBook = styled(Book)`
  width: 64px;
  height: 94px;
`

export default function Home() {
  return (
    <Container>
      <NavBar />
      <ContainerMain>
        <PageHeader>
          <ChartLineUp size={32} />
          <span>Início</span>
        </PageHeader>

        <MainStyles>
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
            <OtherBooks>
              <Title>
                <span>Avaliações mais recentes</span>
              </Title>
              <List>
                <Comment>
                  <Header>
                    <div></div>
                    <User>
                      <span>Jaxson Dias</span>
                      <span>Hoje</span>
                    </User>
                    <div>
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} />
                    </div>
                  </Header>
                  <Frame1>
                    <Book>
                      <Image
                        src="/books/entendendo-algoritmos.png"
                        fill
                        alt=""
                      />
                    </Book>
                    <Frame2>
                      <TitleInfo>
                        <BookTitle>O Hobbit</BookTitle>
                        <BookAuthor>J.R.R. Tolkien</BookAuthor>
                      </TitleInfo>
                      <span>
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh... <a>ver mais</a>
                      </span>
                    </Frame2>
                  </Frame1>
                </Comment>
                <Comment>
                  <Header>
                    <div></div>
                    <User>
                      <span>Jaxson Dias</span>
                      <span>Hoje</span>
                    </User>
                    <div>
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} />
                    </div>
                  </Header>
                  <Frame1>
                    <Book>
                      <Image
                        src="/books/entendendo-algoritmos.png"
                        fill
                        alt=""
                      />
                    </Book>
                    <Frame2>
                      <TitleInfo>
                        <BookTitle>O Hobbit</BookTitle>
                        <BookAuthor>J.R.R. Tolkien</BookAuthor>
                      </TitleInfo>
                      <span>
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh... <a>ver mais</a>
                      </span>
                    </Frame2>
                  </Frame1>
                </Comment>
                <Comment>
                  <Header>
                    <div></div>
                    <User>
                      <span>Jaxson Dias</span>
                      <span>Hoje</span>
                    </User>
                    <div>
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} weight="fill" />
                      <Star size={16} />
                    </div>
                  </Header>
                  <Frame1>
                    <Book>
                      <Image
                        src="/books/entendendo-algoritmos.png"
                        fill
                        alt=""
                      />
                    </Book>
                    <Frame2>
                      <TitleInfo>
                        <BookTitle>O Hobbit</BookTitle>
                        <BookAuthor>J.R.R. Tolkien</BookAuthor>
                      </TitleInfo>
                      <span>
                        Semper et sapien proin vitae nisi. Feugiat neque integer
                        donec et aenean posuere amet ultrices. Cras fermentum id
                        pulvinar varius leo a in. Amet libero pharetra nunc
                        elementum fringilla velit ipsum. Sed vulputate massa
                        velit nibh... <a>ver mais</a>
                      </span>
                    </Frame2>
                  </Frame1>
                </Comment>
              </List>
            </OtherBooks>
          </div>

          <TrendingBooks>
            <Title>
              <span>Sua última leitura</span>
              <div>
                <span>Ver todas</span>
                <CaretRight size={16} />
              </div>
            </Title>
            <List>
              <BookCard>
                <ShorterBook>
                  <Image src="/books/entendendo-algoritmos.png" fill alt="" />
                </ShorterBook>
                <BookDetails>
                  <TitleInfo>
                    <BookTitle>Entendendo Algoritmos</BookTitle>
                    <BookAuthor>Aditya Bhargava</BookAuthor>
                  </TitleInfo>
                  <div>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                  </div>
                </BookDetails>
              </BookCard>
              <BookCard>
                <ShorterBook>
                  <Image src="/books/entendendo-algoritmos.png" fill alt="" />
                </ShorterBook>
                <BookDetails>
                  <TitleInfo>
                    <BookTitle>Entendendo Algoritmos</BookTitle>
                    <BookAuthor>Aditya Bhargava</BookAuthor>
                  </TitleInfo>
                  <div>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                  </div>
                </BookDetails>
              </BookCard>
              <BookCard>
                <ShorterBook>
                  <Image src="/books/entendendo-algoritmos.png" fill alt="" />
                </ShorterBook>
                <BookDetails>
                  <TitleInfo>
                    <BookTitle>Entendendo Algoritmos</BookTitle>
                    <BookAuthor>Aditya Bhargava</BookAuthor>
                  </TitleInfo>
                  <div>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                  </div>
                </BookDetails>
              </BookCard>
              <BookCard>
                <ShorterBook>
                  <Image src="/books/entendendo-algoritmos.png" fill alt="" />
                </ShorterBook>
                <BookDetails>
                  <TitleInfo>
                    <BookTitle>Entendendo Algoritmos</BookTitle>
                    <BookAuthor>Aditya Bhargava</BookAuthor>
                  </TitleInfo>
                  <div>
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} weight="fill" />
                    <Star size={16} />
                  </div>
                </BookDetails>
              </BookCard>
            </List>
          </TrendingBooks>
        </MainStyles>
      </ContainerMain>
    </Container>
  )
}
