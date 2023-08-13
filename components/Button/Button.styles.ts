import styled, { DefaultTheme, css } from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "label">;

const buttonVariants = {
  primary: (theme: DefaultTheme) => css``,
  secondary: (theme: DefaultTheme) => css``,
};

export const Button = styled.button<StyledButtonProps>`
  ${({ theme, variant }) => css`
    ${variant && buttonVariants[variant](theme)};
  `}
`;
