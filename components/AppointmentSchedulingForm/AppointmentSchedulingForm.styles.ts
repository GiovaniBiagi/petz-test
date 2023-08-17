import styled, { css } from "styled-components";

import { TextInput } from "@/components/TextInput/TextInput";
import { SelectInput } from "@/components/SelectInput/SelectInput";
import { Button } from "@/components/Button/Button";
import { IncrementalSelect as StyledIncrementalSelect } from "@/components/IncrementalSelect/IncrementalSelect";
import { TotalScheduleValue as StyledTotalScheduleValue } from "./components/TotalScheduleValue/TotalScheduleValue";

export const Form = styled.form``;

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

export const TotalScheduleDescription = styled(StyledTotalScheduleValue)``;

export const TotalValue = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.semibold};
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
`;

export const SubmitButton = styled(Button)``;
