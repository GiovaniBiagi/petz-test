import React from 'react'

import * as S from './Button.styles'
import { ButtonProps } from './Button.types'

export function Button({
  onClick,
  label,
  variant,
  icon,
  ...props
}: ButtonProps) {
  return (
    <S.Button onClick={onClick} variant={variant} {...props} icon={!!icon}>
      {label}
      {icon ? icon : null}
    </S.Button>
  )
}
