import { FULL_SCREEN_HEIGHT } from "@/constants/style.constants";
import styled, { css } from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: ${FULL_SCREEN_HEIGHT}vh;
  object-fit: cover;
`;

export const TitleContainer = styled.div`
  position: absolute;
`;

export const Title = styled.h1`
  text-align: center;

  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.neutral.white};
  `}
`;
