import React from "react";

import * as S from "./Logo.styles";

export function Logo() {
  return (
    <S.Container>
      <S.Logo src="/images/white-pokeball.svg" alt="Logo" />
      <S.Title>Centro Pokémon</S.Title>
    </S.Container>
  );
}
