import { FOOTER_HEIGHT } from "@/constants/style.constants";
import styled, { css } from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${FOOTER_HEIGHT}vh;
  background-color: ${({ theme }) => theme.colors.neutral.black};
`;

export const FooterText = styled.p`
  text-align: center;

  ${({ theme }) => css`
    color: ${theme.colors.neutral.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
  `}
`;
