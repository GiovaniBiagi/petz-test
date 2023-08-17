import { SubHeader } from "@/components/SubHeader/SubHeader";
import { Layout } from "@/templates/Layout/Layout";
import { AppointmentScheduling as AppointmentSchedulingTemplate } from "@/templates/AppointmentScheduling/AppointmentScheduling";
import { ReactElement } from "react";

export default function AppointmentScheduling() {
  return <AppointmentSchedulingTemplate />;
}

AppointmentScheduling.getLayout = function getLayout(page: ReactElement) {
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
