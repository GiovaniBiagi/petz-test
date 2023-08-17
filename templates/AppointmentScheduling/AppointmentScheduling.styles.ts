import styled, { css } from "styled-components";

import { Button } from "@/components/Button/Button";
import { AppointmentSchedulingForm } from "@/components/AppointmentSchedulingForm/AppointmentSchedulingForm";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    color: ${theme.colors.text.primary};
    font-weight: ${theme.font.semibold};
  `};
`;

export const FormContainer = styled.div`
  padding: 2.4rem;
`;

export const ScheduleForm = styled(AppointmentSchedulingForm)``;

export const SubmitButton = styled(Button)``;
