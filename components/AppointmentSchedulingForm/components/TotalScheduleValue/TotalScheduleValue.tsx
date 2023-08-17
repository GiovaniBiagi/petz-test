import React from "react";

import * as S from "./TotalScheduleValue.styles";

export function TotalScheduleValue() {
  return (
    <S.Container>
      <S.TotalItemContainer>
        <S.TotalItemDescription>
          Número de pokémons a serem atendidos:
        </S.TotalItemDescription>
        <S.TotalItemValue>01</S.TotalItemValue>
      </S.TotalItemContainer>
      <S.TotalItemContainer>
        <S.TotalItemDescription>
          Atendimento unitário por pokémon:
        </S.TotalItemDescription>
        <S.TotalItemValue>R$ 70,00</S.TotalItemValue>
      </S.TotalItemContainer>
      <S.TotalItemContainer>
        <S.TotalItemDescription>Subtotal:</S.TotalItemDescription>
        <S.TotalItemValue>R$ 70,00</S.TotalItemValue>
      </S.TotalItemContainer>
      <S.TotalItemContainer>
        <S.TotalItemDescription>Taxa geracional*:</S.TotalItemDescription>
        <S.TotalItemValue>R$ 2,10</S.TotalItemValue>
      </S.TotalItemContainer>

      <S.TaxesHelperText>
        *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
        alta do time, com limite de até 30%
      </S.TaxesHelperText>
    </S.Container>
  );
}
