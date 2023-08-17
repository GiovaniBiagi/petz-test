import React, { forwardRef } from "react";

import * as S from "./TextInput.styles";

type TextInputProps = {
  error?: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  ({ error, label, id, ...props }, ref) => {
    return (
      <S.Container>
        {label ? <S.Label htmlFor={id}>{label}</S.Label> : null}
        <S.InputContainer hasError={!!error}>
          <S.Input id={id} {...props} ref={ref} />
        </S.InputContainer>
        {error && <S.Error>{error}</S.Error>}
      </S.Container>
    );
  }
);
