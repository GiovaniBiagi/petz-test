import React from 'react'

import * as S from './AppointmentScheduling.styles'
import { useAppointmentSchedulingTemplate } from './useAppointmentSchedulingTemplate'
import { AppointmentSchedulingPageProps } from '@/pages/home/agendar-consulta'

export type AppointmentSchedulingTemplateProps = AppointmentSchedulingPageProps

export function AppointmentScheduling({
  availableScheduleDates,
  pokemons,
  regions
}: AppointmentSchedulingTemplateProps) {
  const { onSubmit, error, success, fetching } =
    useAppointmentSchedulingTemplate()
  return (
    <S.Container>
      {error.status ? (
        <S.FeedbackCard
          type="error"
          title="Houve um problema no agendamento"
          message={error.message}
          actionLink="/agendar-consulta"
          actionLinkLabel="Fazer novo agendamento"
        />
      ) : null}
      {success.status ? (
        <S.FeedbackCard
          type="success"
          title="Consulta Agendada"
          message={success.message}
          actionLink="/agendar-consulta"
          actionLinkLabel="Fazer novo agendamento"
        />
      ) : null}
      {!success.status && !error.status ? (
        <>
          <S.Title>
            Preencha o formulário abaixo para agendar sua consulta
          </S.Title>
          <S.FormContainer>
            <S.ScheduleForm
              onSubmit={onSubmit}
              availableDates={availableScheduleDates}
              pokemons={pokemons}
              regions={regions}
              fetching={fetching}
            />
          </S.FormContainer>
        </>
      ) : null}
    </S.Container>
  )
}
