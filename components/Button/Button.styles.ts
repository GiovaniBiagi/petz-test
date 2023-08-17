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
  icon: () => css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  `,
};

export const Button = styled.button.attrs({
  type: "button",
})<StyledButtonProps>`
  ${({ theme, variant, icon }) => css`
    padding: 1.2rem 2.4rem;
    border-radius: ${theme.radius.full};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    ${variant && buttonVariants[variant](theme)};
    ${icon && buttonVariants["icon"]()};
  `}
`;
