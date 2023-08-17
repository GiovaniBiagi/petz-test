import styled, { css } from "styled-components";

import { Button } from "@/components/Button/Button";
import { AppointmentSchedulingForm } from "@/components/AppointmentSchedulingForm/AppointmentSchedulingForm";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2.4rem;

  ${({ theme }) => css`
    ${theme.breakpoints.tablet} {
      padding: 3.2rem 0;
    }
  `}
 
`;

export const Title = styled.h1`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text.primary};
    font-weight: ${theme.font.semibold};
  `};
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 60rem;

  ${({ theme }) => css`
    ${theme.breakpoints.tablet} {
      padding: 0 2.4rem;
    }
  `}
`;

export const ScheduleForm = styled(AppointmentSchedulingForm)``;

export const SubmitButton = styled(Button)``;
