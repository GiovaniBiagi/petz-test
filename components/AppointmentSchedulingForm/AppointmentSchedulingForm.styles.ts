import styled, { css } from "styled-components";

import { TextInput } from "@/components/TextInput/TextInput";
import { SelectInput } from "@/components/SelectInput/SelectInput";
import { Button } from "@/components/Button/Button";
import { IncrementalSelect as StyledIncrementalSelect } from "@/components/IncrementalSelect/IncrementalSelect";

export const Form = styled.form``;

export const Input = styled(TextInput)``;

export const FormInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  margin-top: 3.2rem;
  flex-wrap: wrap;

  ${({ theme }) => css`
    ${theme.breakpoints.tablet} {
      flex-wrap: nowrap;
    }
  `}
`

export const Select = styled(SelectInput)``;

export const IncrementalSelect = styled(StyledIncrementalSelect)``;

export const TeamContainer = styled.div`
  margin-top: 3.2rem;
`;

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

export const Divider = styled.hr`
  margin: 3.2rem 0;
  color: ${({ theme }) => theme.colors.neutral.gray};
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3.2rem;
`;

export const SubmitButton = styled(Button)``;

//

export const TotalContainer = styled.section`
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
    color: ${theme.colors.text.primary};
  `}
`;

export const TotalItemDescription = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.primary};
  `}
`;

export const TaxesHelperText = styled.p`
  ${({ theme }) => css`
    font-size: 0.8rem;
    font-weight: ${theme.font.normal};
    color: ${theme.colors.text.secondary};
  `}
`;

export const TotalValue = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.semibold};
  `}
`;
