import React from "react";

import * as S from "./Link.styles";

export type LinkProps = {
  text: string;
  variant?: "primary" | "secondary";
  href: string;
} & React.LinkHTMLAttributes<HTMLLinkElement>;

export function Link({ href, text, ...props }: LinkProps) {
  return (
    <S.NextLink href={href} passHref {...props}>
      {text}
    </S.NextLink>
  );
}
