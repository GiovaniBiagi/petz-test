import React from 'react'

import * as S from './Link.styles'
import { LinkProps } from './Link.types'

export function Link({ href, text, ...props }: LinkProps) {
  return (
    <S.NextLink href={href} passHref {...props}>
      {text}
    </S.NextLink>
  )
}
