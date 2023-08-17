import { FOOTER_HEIGHT, HEADER_HEIGHT } from "@/constants/style.constants";
import styled, { css } from "styled-components";

const REMAINING_SPACE = 100 - (HEADER_HEIGHT + FOOTER_HEIGHT);

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: ${REMAINING_SPACE}vh;
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
