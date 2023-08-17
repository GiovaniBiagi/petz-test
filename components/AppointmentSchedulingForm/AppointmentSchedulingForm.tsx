import { useAppointmentSchedulingForm } from "./useAppointmentSchedulingForm";

import * as S from "./AppointmentSchedulingForm.styles";

type AppointmentSchedulingFormProps = {
  onSubmit: (data: any) => void;
};

export function AppointmentSchedulingForm({
  onSubmit,
}: AppointmentSchedulingFormProps) {
  const { errors, control, handleSubmit, register, setValue } =
    useAppointmentSchedulingForm();

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
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

      <S.Select
        id="region"
        label="Região"
        placeholder="Selecione sua região"
        onChange={(value) => setValue("region", value)}
        options={[
          {
            value: "1",
            label: "Rocket",
          },
          {
            value: "2",
            label: "Monster",
          },
          {
            value: "3",
            label: "Block",
          },
          {
            value: "4",
            label: "Seven",
          },
        ]}
      />
      <S.Select
        id="city"
        label="Cidade"
        placeholder="Selecione sua cidade"
        onChange={(value) => setValue("city", value)}
        options={[]}
      />

      <S.TeamContainer>
        <S.TeamTitle>Cadastre seu time</S.TeamTitle>
        <S.TeamSubtitle>Atendemos até 06 pókemons por vez</S.TeamSubtitle>
        <S.IncrementalSelect
          name="team"
          control={control}
          options={[
            {
              value: "1",
              label: "Pikachu",
            },
            {
              value: "2",
              label: "Charmander",
            },
            {
              value: "3",
              label: "Bulbasaur",
            },
            {
              value: "4",
              label: "Squirtle",
            },
          ]}
          label="Pokémon"
          onChange={(value, index) => setValue(`team.${index}`, value)}
        />
      </S.TeamContainer>

      <S.Divider />

      <S.TotalScheduleDescription />

      <S.SubmitContainer>
        <S.TotalValue>Valor Total: R$ 72,10</S.TotalValue>
        <S.SubmitButton
          type="submit"
          label="Concluir Agendamento"
          variant="primary"
        />
      </S.SubmitContainer>
    </S.Form>
  );
}
