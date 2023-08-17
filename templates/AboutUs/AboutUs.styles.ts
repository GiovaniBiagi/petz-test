import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 2rem 0;
  max-width: 42.5rem;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.semibold};
  `}
`;

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
  `}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.medium};
    line-height: 2.5rem;
  `}
`;
