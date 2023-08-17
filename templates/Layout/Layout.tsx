import React from "react";

import * as S from "./Layout.styles";

type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <S.Container>
      <S.Header />
      {children}
      <S.Footer />
    </S.Container>
  );
}
