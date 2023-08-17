import React from "react";

import * as S from "./ScheduleAppointment.styles";

export function ScheduleAppointment() {
  return (
    <S.Container>
      <S.Title>Preencha o formulário abaixo para agendar sua consulta</S.Title>
      <S.FormContainer>
        <S.ScheduleForm />
      </S.FormContainer>
    </S.Container>
  );
}
