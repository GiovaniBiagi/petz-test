import React from 'react'

import * as S from './FeedbackCard.styles'
import { FeedbackCardProps } from './FeedbackCard.types'

export function FeedbackCard({
  title,
  message,
  actionLink,
  actionLinkLabel,
  type
}: FeedbackCardProps) {
  return (
    <S.Container data-testid="feedback-container">
      <S.Title>{title}</S.Title>
      <S.Icon
        src={type === 'success' ? '/check.svg' : '/warning.svg'}
        alt="Feedback Icon"
      />

      <S.Message>{message}</S.Message>
      <S.ActionButton
        href={actionLink}
        variant="primary"
        text={actionLinkLabel}
      />
    </S.Container>
  )
}
