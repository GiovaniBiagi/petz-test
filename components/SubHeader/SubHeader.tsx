import React from 'react'

import * as S from './SubHeader.styles'
import { SubHeaderProps } from './SubHeader.types'

export function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <S.Container>
      <S.Breadcrumbs />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  )
}
