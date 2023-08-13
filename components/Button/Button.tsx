import React from "react";

import * as S from "./Button.styles";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ onClick, label, variant, ...props }: ButtonProps) {
  return (
    <S.Button onClick={onClick} variant={variant} {...props}>
      {label}
    </S.Button>
  );
}
