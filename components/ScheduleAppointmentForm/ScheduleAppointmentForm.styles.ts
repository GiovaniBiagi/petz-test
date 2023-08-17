import styled, { css } from "styled-components";

import { TextInput } from "@/components/TextInput/TextInput";
import { SelectInput } from "@/components/SelectInput/SelectInput";
import { Button } from "@/components/Button/Button";
import { IncrementalSelect as StyledIncrementalSelect } from "@/components/IncrementalSelect/IncrementalSelect";

export const Form = styled.form`
  width: 100%;
`;

//a grid with 5 rows and 1 column
export const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  gap: 1.6rem;
  margin-bottom: 1.6rem;

  /* @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  } */
`;

export const Item = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Input = styled(TextInput)``;

export const Select = styled(SelectInput)``;

export const IncrementalSelect = styled(StyledIncrementalSelect)``;

export const TeamContainer = styled.div``;

export const TeamTitle = styled.p`
  margin-bottom: 0.8rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.text.primary};
    font-weight: ${theme.font.bold};
  `}
`;

export const TeamSubtitle = styled.p`
  margin-bottom: 1.6rem;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.text.secondary};
    font-weight: ${theme.font.medium};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    color: ${theme.colors.text.primary};
    font-weight: ${theme.font.semibold};
    margin-bottom: 0.8rem;
  `}
`;

export const SubmitButton = styled(Button)``;
