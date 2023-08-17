import React from "react";
import { Control, FieldValues } from "react-hook-form";

import * as S from "./IncrementalSelect.styles";
import { useIncrementalSelect } from "./useIncrementalSelect";
import { SelectInputProps } from "@/components/SelectInput/SelectInput";

type IncrementalSelectProps = {
  name: string;
  label: string;
  control: Control<FieldValues>;
  options: SelectInputProps["options"];
  onChange?: (value: string, index: number) => void;
};

export function IncrementalSelect({
  name,
  label,
  control,
  options,
  onChange,
}: IncrementalSelectProps) {
  const { selectList, disableAddition, handleAddSelect, handleDeleteSelect } =
    useIncrementalSelect({
      control,
      fieldPrefix: name,
    });

  return (
    <S.Container>
      {selectList.map((select, index) => (
        <S.SelectInputContainer key={select.id}>
          <S.SelectCustomLabel>{`${label} ${index + 1}`}</S.SelectCustomLabel>
          <S.Select
            onChange={(value) => onChange && onChange(value, index)}
            id="pokemon"
            options={options}
          />
          {index === 0 ? null : (
            <S.DeleteButton
              label=""
              icon={<S.TrashIcon />}
              onClick={() => handleDeleteSelect(index)}
            />
          )}
        </S.SelectInputContainer>
      ))}
      <S.AddButton
        disabled={disableAddition}
        onClick={handleAddSelect}
        variant="secondary"
        label="Adicionar novo pokémon ao time"
        icon={<S.PlusIcon />}
      />
    </S.Container>
  );
}
