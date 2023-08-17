import styled, { css } from "styled-components";

import { FiChevronUp, FiChevronDown } from "react-icons/fi";

type StyledListProps = {
  visible: boolean;
};

type StyledButtonProps = {
  error: boolean;
};

export const Container = styled.div`
  position: relative;
  flex: 1;
`;

export const Button = styled.button.attrs({
  type: "button",
}) <StyledButtonProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 100%;
  height: 4.5rem;
  border-radius: 0.8rem;
  padding: 0 1rem;
  
  ${({ theme, error }) => css`
    background-color: ${theme.colors.neutral.white};
    border: 1px solid ${theme.colors.neutral.gray};

    ${error &&
    css`
      border-color: ${theme.colors.neutral.error};
    `}

    svg {
      color: ${theme.colors.neutral.darkGray};
      font-size: 2rem;
    }
  `}
`;

export const Input = styled.input`
  height: 100%;
  outline: none;
  pointer-events: none;
  border: none;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.neutral.darkGray};
  `}
`;

export const List = styled.ul<StyledListProps>`
  ${({ theme, visible }) => css`
    background-color: ${theme.colors.neutral.white};
    border: 1px solid ${theme.colors.neutral.gray};
    display: ${visible ? "block" : "none"};
  `}
  position: absolute;
  top: 90%;
  left: 0;
  width: 100%;
  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;
`;

export const ListItem = styled.li`
  padding: 0.8rem;
  cursor: pointer;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.neutral.darkGray};

    &:hover {
      background-color: ${theme.colors.neutral.gray};
    }
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

export const ChevronUp = styled(FiChevronUp)``;

export const ChevronDown = styled(FiChevronDown)``;

export const EmptyState = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem 0.8rem;
`;

export const EmptyStateText = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.medium};
    color: ${theme.colors.neutral.darkGray};
  `}
`;

export const Error = styled.p`
  position: absolute;

  ${({ theme }) => css`
    color: ${theme.colors.neutral.error};
    font-size: 1rem;
    margin-top: 0.4rem;
  `}
`;
