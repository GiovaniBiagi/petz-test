import { FOOTER_HEIGHT } from "@/constants/style.constants";
import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${FOOTER_HEIGHT}vh;
  background-color: ${({ theme }) => theme.colors.neutral.black};
`;

export const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.neutral.white};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.normal};
`;
