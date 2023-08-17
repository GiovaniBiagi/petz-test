import styled, { DefaultTheme, css } from "styled-components";
import UseLink from "next/link";
import { LinkProps } from "./Link.types";

type StyledButtonProps = Omit<LinkProps, "text" | "href">;

const linkVariants = {
  primary: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.brand.primary};
    color: ${theme.colors.neutral.white};
    &:hover {
      filter: opacity(0.8);
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    background-color: transparent;
    color: ${theme.colors.text.primary};
  `,
};

export const NextLink = styled(UseLink) <StyledButtonProps>`
  text-decoration: none;

  ${({ theme, variant }) => css`
    padding: 1.2rem 2.4rem;
    border-radius: ${theme.radius.full};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};

    ${variant && linkVariants[variant](theme)};
  `};
`;
