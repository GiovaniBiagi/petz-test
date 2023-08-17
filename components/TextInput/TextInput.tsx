import React, { forwardRef } from 'react'

import * as S from './TextInput.styles'
import { TextInputProps } from './TextInput.types'

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, id, ...props }, ref) => {
    return (
      <S.Container>
        {label ? <S.Label htmlFor={id}>{label}</S.Label> : null}
        <S.InputContainer error={!!error}>
          <S.Input id={id} {...props} ref={ref} />
        </S.InputContainer>
        {error && <S.Error data-testid="text-input-error">{error}</S.Error>}
      </S.Container>
    )
  }
)
