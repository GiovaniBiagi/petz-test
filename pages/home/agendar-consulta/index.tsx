import { SubHeader } from "@/components/SubHeader/SubHeader";
import { Layout } from "@/templates/Layout/Layout";
import { ScheduleAppointment as ScheduleAppointmentTemplate } from "@/templates/ScheduleAppointment/ScheduleAppointment";
import { ReactElement } from "react";

export default function ScheduleAppointment() {
  return <ScheduleAppointmentTemplate />;
}

ScheduleAppointment.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <SubHeader
        title="Agendar Consulta"
        subtitle="Recupere seus pokémons em 5 segundos"
      />
      {page}
    </Layout>
  );
};
