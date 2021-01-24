import * as S from './styles'

const Main = ({
  title = 'react avançado',
  description = 'TypeScript, ReactJS, NextJS, Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Developer em frente ao uma tela"
    />
  </S.Wrapper>
)

export default Main
