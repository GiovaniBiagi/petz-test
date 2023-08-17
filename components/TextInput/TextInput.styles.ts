import styled, { DefaultTheme, css } from "styled-components";

type StyledContainerProps = {
  error: boolean;
};

const inputVariants = {
  error: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.neutral.error};
  `,
};

export const Container = styled.div`
  width: 100%;
`;

export const InputContainer = styled.div<StyledContainerProps>`
  display: flex;
  height: 4rem;
  padding: 0 1.6rem;

  ${({ theme, error }) => css`
    border: 1px solid ${theme.colors.neutral.gray};
    border-radius: 0.8rem;

    &:focus-within {
      border-color: ${theme.colors.brand.primary};
    }
    ${error && inputVariants.error(theme)}
  `}
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
  `}
`;

export const Label = styled.label`
  margin-bottom: 0.8rem;
  display: inline-block;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text.primary};
  `}
`;

export const Error = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.neutral.error};
    font-size: 1rem;
    margin-top: 0.4rem;
  `}
`;
