import styled from "styled-components";

import { Link } from "@/components/Link/Link";
import { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;
  border-radius: 0.8rem;
  gap: 2rem;

  ${({ theme }) => css`
  border: 1px solid ${theme.colors.brand.secondary};
  background-color: ${theme.utils.hexToRgba(theme.colors.brand.secondary, 0.04)};

  ${theme.breakpoints.tablet} {
    max-width: 40rem;
    }
  `}
`;

export const Title = styled.h1`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text.primary};
  `}
`;

export const Icon = styled.img`
  width: 4.2rem;
  height: 4.2rem;
`;

export const Message = styled.p`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.secondary};
  `}
`;

export const ActionButton = styled(Link)``;
