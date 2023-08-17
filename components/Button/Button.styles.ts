import styled, { DefaultTheme, css } from "styled-components";
import { ButtonProps } from "./Button";

type StyledButtonProps = Omit<ButtonProps, "label">;

const buttonVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.brand.primary};
    color: ${theme.colors.neutral.white};
    &:hover {
      filter: opacity(0.8);
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.neutral.white};
    border: 1px solid ${theme.colors.text.primary};
    color: ${theme.colors.text.primary};
    &:hover {
      filter: invert();
    }
  `,
  disabled: () => css`
    cursor: not-allowed;
    opacity: 0.5;
  `,
  icon: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    white-space: nowrap;
  `,
};

export const Button = styled.button.attrs({
  type: "button",
}) <StyledButtonProps>`
  ${({ theme, variant, icon, disabled }) => css`
    padding: 1rem 1.6rem;
    border-radius: ${theme.radius.full};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    ${variant && buttonVariants[variant](theme)};
    ${disabled && buttonVariants["disabled"]()};
    ${icon && buttonVariants["icon"]()};
  `}
`;
