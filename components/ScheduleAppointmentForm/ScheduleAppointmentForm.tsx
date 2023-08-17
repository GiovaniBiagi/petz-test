import React, { ChangeEvent } from "react";

import * as S from "./ScheduleAppointmentForm.styles";
import { useForm, useFormState } from "react-hook-form";

import { Options } from "@/components/SelectInput/SelectInput";

type FormValues = {
  name: string;
  lastName: string;
  region: string | ChangeEvent<HTMLSelectElement>;
  city: string | ChangeEvent<HTMLSelectElement>;
  team: Options[];
};

type ScheduleAppointmentFormProps = {
  onSubmit: (data: FormValues) => void;
};

export function ScheduleAppointmentForm({
  onSubmit,
}: ScheduleAppointmentFormProps) {
  const { register, handleSubmit, setValue, control } = useForm<FormValues>({
    defaultValues: {
      name: "",
      lastName: "",
      region: "",
      city: "",
      team: [
        {
          value: "",
          label: "",
        },
      ],
    },
  });

  const { errors } = useFormState({
    control,
  });

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
        name="city"
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

      <S.SubmitButton
        type="submit"
        label="Concluir Agendamento"
        variant="primary"
      />
    </S.Form>
  );
}
