import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito"
    />
    <S.Title>react avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS, Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Developer em frente ao uma tela"
    />
  </S.Wrapper>
)

export default Main
