import React from 'react'

import * as S from './IncrementalSelect.styles'
import { useIncrementalSelect } from './useIncrementalSelect'
import { IncrementalSelectProps } from './IncrementalSelect.types'

export function IncrementalSelect({
  name,
  label,
  control,
  options,
  onChange
}: IncrementalSelectProps) {
  const { selectList, disableAddition, handleAddSelect, handleDeleteSelect } =
    useIncrementalSelect({
      control,
      fieldPrefix: name
    })

  return (
    <S.Container>
      {selectList.map((select, index) => (
        <S.SelectInputContainer key={select.id}>
          <S.SelectCustomLabel>{`${label} ${index + 1}`}</S.SelectCustomLabel>
          <S.Select
            placeholder="Selecione um pokémon"
            data-testid="incremental-select"
            onChange={(value) => onChange && onChange(value, index)}
            id="pokemon"
            options={options}
          />
          {index === 0 ? null : (
            <S.DeleteButton
              label=""
              icon={<S.TrashIcon />}
              data-testid="delete-select"
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
        data-testid="add-select"
        icon={<S.PlusIcon />}
      />
    </S.Container>
  )
}
