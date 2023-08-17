import { useAppointmentSchedulingForm } from './useAppointmentSchedulingForm'

import * as S from './AppointmentSchedulingForm.styles'
import { AppointmentSchedulingFormProps } from './AppointmentSchedulingForm.types'

export function AppointmentSchedulingForm({
  onSubmit,
  availableDates,
  regions,
  pokemons,
  fetching
}: AppointmentSchedulingFormProps) {
  const {
    errors,
    control,
    handleSubmit,
    register,
    setValue,
    values,
    cities,
    availableTime,
    totalValues
  } = useAppointmentSchedulingForm({ pokemons })

  return (
    <S.Form>
      <S.FormInputContainer>
        <S.Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite seu nome"
          error={errors.name && errors.name.message}
          data-testid="name"
          {...register('name', { required: 'O campo nome é obrigatório' })}
        />

        <S.Input
          type="text"
          id="lastName"
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          error={errors.lastName && errors.lastName.message}
          data-testid="lastName"
          {...register('lastName', {
            required: 'O campo sobrenome é obrigatório'
          })}
        />
      </S.FormInputContainer>
      <S.FormInputContainer>
        <S.Select
          {...register('region', {
            required: 'O campo região é obrigatório'
          })}
          id="region"
          label="Região"
          error={errors.region && errors.region.message}
          placeholder="Selecione sua região"
          onChange={(value) => setValue('region', value)}
          options={regions.map((region) => ({
            label: region,
            value: region
          }))}
        />
        <S.Select
          {...register('city', {
            required: 'O campo região é obrigatório'
          })}
          id="city"
          label="Cidade"
          placeholder="Selecione sua cidade"
          error={errors.city && errors.city.message}
          onChange={(value) => setValue('city', value)}
          options={cities}
          disabled={!values.region}
        />
      </S.FormInputContainer>

      <S.TeamContainer>
        <S.TeamTitle>Cadastre seu time</S.TeamTitle>
        <S.TeamSubtitle>Atendemos até 06 pókemons por vez</S.TeamSubtitle>
        <S.IncrementalSelect
          name="team"
          control={control}
          options={pokemons.map((pokemon) => ({
            label: pokemon.name,
            value: pokemon.name
          }))}
          label="Pokémon"
          onChange={(value, index) => setValue(`team.${index}.value`, value)}
        />
      </S.TeamContainer>

      <S.FormInputContainer>
        <S.Select
          {...register('date', {
            required: 'Selecione uma data de agendamento'
          })}
          id="date"
          label="Data para o atendimento"
          error={errors.date && errors.date.message}
          placeholder="Slecione uma data"
          data-testid="date"
          onChange={(value) => setValue('date', value)}
          options={availableDates.map((date) => ({
            label: date,
            value: date
          }))}
        />
        <S.Select
          {...register('time', {
            required: 'Selecione o horário de atendimento'
          })}
          id="time"
          label="Horário de atendimento"
          placeholder="Selecione um horário"
          error={errors.time && errors.time.message}
          data-testid="time"
          onChange={(value) => setValue('time', value)}
          options={availableTime}
          disabled={!values.date}
        />
      </S.FormInputContainer>
      <S.Divider />

      <S.TotalContainer>
        <S.TotalItemContainer>
          <S.TotalItemDescription>
            Número de pokémons a serem atendidos:
          </S.TotalItemDescription>
          <S.TotalItemValue>{totalValues.patients}</S.TotalItemValue>
        </S.TotalItemContainer>
        <S.TotalItemContainer>
          <S.TotalItemDescription>
            Atendimento unitário por pokémon:
          </S.TotalItemDescription>
          <S.TotalItemValue>{totalValues.pricePerPatient}</S.TotalItemValue>
        </S.TotalItemContainer>
        <S.TotalItemContainer>
          <S.TotalItemDescription>Subtotal:</S.TotalItemDescription>
          <S.TotalItemValue>{totalValues.subtotal}</S.TotalItemValue>
        </S.TotalItemContainer>
        <S.TotalItemContainer>
          <S.TotalItemDescription>Taxa geracional*:</S.TotalItemDescription>
          <S.TotalItemValue>{totalValues.taxValue}</S.TotalItemValue>
        </S.TotalItemContainer>

        <S.TaxesHelperText>
          *adicionamos uma taxa de 3%, multiplicado pelo número da geração mais
          alta do time, com limite de até 30%
        </S.TaxesHelperText>
      </S.TotalContainer>

      <S.SubmitContainer>
        <S.TotalValue>Valor Total: {totalValues.total}</S.TotalValue>
        <S.SubmitButton
          type="submit"
          label="Concluir Agendamento"
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          data-testid="submit"
          disabled={values.team.some((team) => !team.value) || fetching}
        />
      </S.SubmitContainer>
    </S.Form>
  )
}
