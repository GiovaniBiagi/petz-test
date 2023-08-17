import styled, { css } from "styled-components";

import NextLink from "next/link";

export const Container = styled.div``;

export const BreadcrumbItem = styled(NextLink)`
  text-decoration: none;

  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
  `}
`;

export const BreadcrumbSeparator = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 0.4rem;
  `}
`;
