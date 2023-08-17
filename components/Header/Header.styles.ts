import styled, { css } from "styled-components";

import { Logo as StyledLogo } from "@/components/Logo/Logo";
import { Link as StyledLink } from "@/components/Link/Link";
import { HEADER_HEIGHT } from "@/constants/style.constants";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${HEADER_HEIGHT}vh;
  padding: 0 1.2rem;

  ${({ theme }) => css`
  ${theme.breakpoints.tablet} {
      padding: 0 5.6rem;
    }
  `}
`;

export const Nav = styled.nav``;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${({ theme }) => css`
  ${theme.breakpoints.tablet} {
      gap: 3rem;
    }
  `}
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const Link = styled(StyledLink)``;

export const Logo = styled(StyledLogo)``;
