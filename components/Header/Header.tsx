import React from 'react'

import * as S from './Header.styles'

import { LinkProps } from '@/components/Link/Link.types'

type NavigationProps = LinkProps[]

const NAVIGATION_ITEMS: NavigationProps = [
  {
    href: '/home/quem-somos',
    text: 'Quem Somos',
    variant: 'secondary'
  },
  {
    href: '/home/agendar-consulta',
    text: 'Agendar Consulta',
    variant: 'primary'
  }
]

export function Header() {
  return (
    <S.Header>
      <S.Logo />
      <S.Nav>
        <S.Menu>
          {NAVIGATION_ITEMS.map((item) => (
            <S.MenuItem key={item.href}>
              <S.Link {...item} />
            </S.MenuItem>
          ))}
        </S.Menu>
      </S.Nav>
    </S.Header>
  )
}
