import React from "react";

import * as S from "./SubHeader.styles";

export type SubHeaderProps = {
  title: string;
  subtitle: string;
};

export function SubHeader({ title, subtitle }: SubHeaderProps) {
  return (
    <S.Container>
      <S.Breadcrumbs />
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
    </S.Container>
  );
}
