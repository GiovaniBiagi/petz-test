import React from "react";

import * as S from "./Button.styles";

export type ButtonProps = {
  label: string;
  variant?: "primary" | "secondary";
  icon?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

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
  );
}
