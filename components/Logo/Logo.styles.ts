import styled, { css, keyframes } from "styled-components";

const hideText = keyframes`
  from {
    display: block;
  }

  to {
    display: none;
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    gap: 1rem;
    padding: 1rem;
    border-radius: 999px;

    background-color: ${theme.colors.brand.primary};
    width: fit-content;

    &:hover ${Title} {
      display: block !important;
    }
  `}
`;

export const Logo = styled.img``;

export const Title = styled.h1`
  display: block;
  animation: ${hideText};
  animation-duration: 1s;
  animation-delay: 5s;
  animation-fill-mode: forwards;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    color: ${theme.colors.neutral.white};
  `}
`;
