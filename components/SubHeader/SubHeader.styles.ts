import styled, { css } from "styled-components";

import { Breadcrumbs as StyledBreadcrumbs } from "@/components/Breadcrumbs/Breadcrumbs";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  ${({ theme }) => css`
    background-color: ${theme.colors.brand.primary};
    padding: 3.2rem 5.6rem;
  `}
`;

export const Breadcrumbs = styled(StyledBreadcrumbs)``;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-size: ${theme.font.sizes.xxlarge};
  `};
`;

export const SubTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`;
