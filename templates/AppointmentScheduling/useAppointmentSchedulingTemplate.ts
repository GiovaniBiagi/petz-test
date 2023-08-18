import { createSchedule, getAvailableDates } from "@/services/schedule";
import { useEffect, useState } from "react";

export const useAppointmentSchedulingTemplate = () => {
  const [availableDates, setAvailableDates] = useState<string[]>([]);
  const [fetching, setFetching] = useState(false);
  const [success, setSuccess] = useState({
    status: false,
    message: "",
  });
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const handleFetchAvailableDates = async () => {
    setFetching(true);
    try {
      const response = await getAvailableDates();
      if (response.status === 200) {
        setAvailableDates(response.data);
      }
      setFetching(false);
    } catch (error: any) {
      setFetching(false);
      setError({
        status: true,
        message: error.message,
      })
    }
  };

  useEffect(() => {
    handleFetchAvailableDates();
  }, []);

  const onSubmit = async (data: any) => {
    setFetching(true);
    try {
      const response = await createSchedule(data);
      if (response.status === 200) {
        setSuccess({
          status: true,
          message: `Seu agendamento para dia ${response.data.date}, às ${response.data.time}, para ${response.data.team.length} pokémons foi realizado com sucesso!`,
        });
      }
    } catch (error: any) {
      setError({
        status: true,
        message: error.message,
      })
    }
  };

  return {
    onSubmit,
    success,
    error,
    fetching,
    availableDates
  };
};
