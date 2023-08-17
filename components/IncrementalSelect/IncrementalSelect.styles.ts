import styled, { css } from "styled-components";
import { FiPlus, FiTrash } from "react-icons/fi";

import { SelectInput } from "@/components/SelectInput/SelectInput";
import { Button } from "@/components/Button/Button";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3.2rem;
`;

export const Select = styled(SelectInput)``;

export const AddButton = styled(Button)`
  width: 100%;

  ${({ theme }) => css`
    ${theme.breakpoints.tablet} {
      width: 50%;
    }
  `}
`;
export const DeleteButton = styled(Button)`
  margin-left: 0.8rem;
`;

export const SelectCustomLabel = styled.p`
  ${({ theme }) => css`
    margin-right: 1.6rem;
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.text.primary};
  `}
`;

export const SelectInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PlusIcon = styled(FiPlus)`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.medium};
    stroke-width: 3px;
  `}
`;

export const TrashIcon = styled(FiTrash)`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-size: ${theme.font.sizes.medium};
    stroke-width: 3px;
  `}
`;
