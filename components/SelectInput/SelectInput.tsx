import React from "react";

import * as S from "./SelectInput.styles";
import { useSelectInput } from "./useSelectInput";

export type Options = {
  value: string;
  label: string;
};

export type SelectInputProps = {
  options: Options[];
  onChange?: (value: string) => void;
  error?: string;
  label?: string;
  placeholder?: string;
  id: string;
};

export function SelectInput({
  options,
  placeholder,
  error,
  onChange,
  id,
  label
}: SelectInputProps) {
  const { isOpen, handleToggleSelect, onOptionChange, value } =
    useSelectInput();

  return (
    <S.Container>
      {label ? <S.Label htmlFor={id}>{label}</S.Label> : null}
      <S.Button onClick={() => handleToggleSelect()} error={!!error}>
        <S.Input id={id} placeholder={placeholder} defaultValue={value} />
        {isOpen ? <S.ChevronUp /> : <S.ChevronDown />}
      </S.Button>
      <S.List visible={isOpen}>
        {options.length ? (
          options.map((option) => (
            <S.ListItem
              key={option.value}
              value={option.value}
              onClick={() => {
                onOptionChange(option.label);
                onChange && onChange(option.value);
                handleToggleSelect();
              }}
            >
              {option.label}
            </S.ListItem>
          ))
        ) : (
          <S.EmptyState>
            <S.EmptyStateText>Nenhum item disponível.</S.EmptyStateText>
          </S.EmptyState>
        )}
      </S.List>
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
}
