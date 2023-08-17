import React from 'react'

import * as S from './Home.styles'

export function Home() {
  return (
    <S.Container>
      <S.Image src="/images/pokemon-hero.jpg" alt="Hero" />
      <S.TitleContainer>
        <S.Title>Cuidamos bem do seu pokémon,</S.Title>
        <S.Title>para ele cuidar bem de você</S.Title>
      </S.TitleContainer>
    </S.Container>
  )
}
