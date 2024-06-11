import styled from 'styled-components'
import Image from 'next/image'

const Container = styled.div`
  display: flex;
  height: 100vh;
`
const ImageContainer = styled.div`
  width: 40%;
  //flex: 1;
  position: relative;
  img {
    border-radius: 20px;
    overflow: hidden;
    width: 50px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoginBox = styled.div`
  max-width: 372px;
  width: 100%;

  h1 {
    font-size: ${(props) => props.theme.fontSizes['2xl']};
    font-weight: ${(props) => props.theme.fontWeights.bold};
    color: ${(props) => props.theme.colors.gray[100]};
  }
  h2 {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    color: ${(props) => props.theme.colors.gray[200]};
  }
`

const Login = styled.form`
  margin-top: 40px;

  display: flex;
  flex-direction: column;
  gap: 16px;
  button {
    padding-left: 20px;
    background-color: ${(props) => props.theme.colors.gray[600]};
    width: 100%;
    height: 72px;
    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  p {
    background-color: ${(props) => props.theme.colors.gray[600]};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.fontWeights.medium};
    color: ${(props) => props.theme.colors.gray[200]};
  }
  img {
    background-color: ${(props) => props.theme.colors.gray[600]};
  }
`
export default function Home() {
  return (
    <Container>
      <ImageContainer>
        <Image
          //height={912}
          //width={598}
          fill
          style={{ objectFit: 'cover' }}
          alt="login"
          src="/image.png"
          priority
          quality={100}
          sizes="50vw"
        />
      </ImageContainer>
      <LoginContainer>
        <LoginBox>
          <h1>Boas vindas!</h1>
          <h2>Faça seu login ou acesse como visitante.</h2>
          <Login>
            <button>
              <Image
                width={32}
                height={32}
                alt="google"
                src="/google.png"
                priority
                quality={100}
              />
              <p>Entrar com Google</p>
            </button>
            <button>
              <Image
                width={32}
                height={32}
                alt="hithub"
                src="/github.png"
                priority
                quality={100}
              />
              <p>Entrar com GitHub</p>
            </button>
            <button>
              <Image
                width={32}
                height={32}
                alt="rocket"
                src="/rocket.png"
                priority
                quality={100}
              />
              <p>Acessar como visitante</p>
            </button>
          </Login>
        </LoginBox>
      </LoginContainer>
    </Container>
  )
}
