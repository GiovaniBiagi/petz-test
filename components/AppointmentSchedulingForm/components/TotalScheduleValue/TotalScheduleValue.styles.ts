import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3.2rem;
  gap: 0.8rem;
`;

export const TotalItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalItemValue = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`;

export const TotalItemDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`;

export const TaxesHelperText = styled.p`
  ${({ theme }) => css`
    font-size: 0.8rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.secondary};
  `}
`;
