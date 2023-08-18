import React, { forwardRef } from 'react'

import * as S from './SelectInput.styles'
import { useSelectInput } from './useSelectInput'
import { SelectInputProps } from './SelectInput.types'

export default forwardRef<HTMLInputElement, SelectInputProps>(
  function SelectInput(
    { options, placeholder, error, onChange, id, label, disabled },
    ref
  ) {
    const { isOpen, handleToggleSelect, onOptionChange, value } =
      useSelectInput()

    return (
      <S.Container>
        {label ? <S.Label htmlFor={id}>{label}</S.Label> : null}
        <S.Button
          onClick={() => handleToggleSelect()}
          error={!!error}
          disabled={disabled}
          data-testid={`select-input-${id}`}
        >
          <S.Input
            id={id}
            placeholder={placeholder}
            defaultValue={value}
            ref={ref}
          />
          {isOpen ? <S.ChevronUp /> : <S.ChevronDown />}
        </S.Button>
        <S.List visible={isOpen}>
          {options.length ? (
            options.map((option) => (
              <S.ListItem
                key={option.value}
                value={option.value}
                data-testid={`select-input-option-${id}`}
                onClick={() => {
                  onOptionChange(option.label)
                  onChange && onChange(option.value)
                  handleToggleSelect()
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
        {error && <S.Error data-testid="select-input-error">{error}</S.Error>}
      </S.Container>
    )
  }
)
