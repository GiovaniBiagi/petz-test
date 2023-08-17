import React from "react";

import * as S from "./AppointmentScheduling.styles";

export function AppointmentScheduling() {
  return (
    <S.Container>
      <S.Title>Preencha o formulário abaixo para agendar sua consulta</S.Title>
      <S.FormContainer>
        <S.ScheduleForm onSubmit={console.log} />
      </S.FormContainer>
    </S.Container>
  );
}
