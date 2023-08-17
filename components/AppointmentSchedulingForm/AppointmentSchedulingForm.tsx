import { useAppointmentSchedulingForm } from "./useAppointmentSchedulingForm";

import * as S from "./AppointmentSchedulingForm.styles";

type AppointmentSchedulingFormProps = {
  onSubmit: (data: any) => void;
};

export function AppointmentSchedulingForm({
  onSubmit,
}: AppointmentSchedulingFormProps) {
  const { errors, control, handleSubmit, register, setValue, values } =
    useAppointmentSchedulingForm();

  return (
    <S.Form>
      <S.FormInputContainer>
        <S.Input
          type="text"
          id="name"
          label="Nome"
          placeholder="Digite seu nome"
          error={errors.name?.message as string}
          {...register("name", { required: "O campo nome é obrigatório" })}
        />

        <S.Input
          type="text"
          id="lastName"
          label="Sobrenome"
          placeholder="Digite seu sobrenome"
          error={errors.lastName?.message as string}
          {...register("lastName", {
            required: "O campo sobrenome é obrigatório",
          })}
        />
      </S.FormInputContainer>
      <S.FormInputContainer>
        <S.Select
          {...register("region", {
            required: "O campo região é obrigatório",
          })}
          id="region"
          label="Região"
          error={errors.region?.message as string}
          placeholder="Selecione sua região"
          onChange={(value) => setValue("region", value)}
          options={[]}
        />
        <S.Select
          {...register("city", {
            required: "O campo região é obrigatório",
          })}
          id="city"
          label="Cidade"
          placeholder="Selecione sua cidade"
          error={errors.city?.message as string}
          onChange={(value) => setValue("city", value)}
          options={[]}
        />
      </S.FormInputContainer>

      <S.TeamContainer>
        <S.TeamTitle>Cadastre seu time</S.TeamTitle>
        <S.TeamSubtitle>Atendemos até 06 pókemons por vez</S.TeamSubtitle>
        <S.IncrementalSelect
          name="team"
          control={control}
          options={[]}
          label="Pokémon"
          onChange={(value, index) => setValue(`team.${index}.value`, value)}
        />
      </S.TeamContainer>

      <S.Divider />

      <S.TotalContainer>
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
      </S.TotalContainer>

      <S.SubmitContainer>
        <S.TotalValue>Valor Total: R$ 72,10</S.TotalValue>
        <S.SubmitButton
          type="submit"
          label="Concluir Agendamento"
          variant="primary"
          onClick={handleSubmit(onSubmit)}
          disabled={values.team.some((team) => !team.value)}
        />
      </S.SubmitContainer>
    </S.Form>
  );
}
