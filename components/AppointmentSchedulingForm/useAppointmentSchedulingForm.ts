import { useForm, useFormState } from "react-hook-form";
import { Options } from "@/components/SelectInput/SelectInput";

export type AppointmentSchedulingFormValues = {
  name: string;
  lastName: string;
  region: string;
  city: string;
  team: Options[];
};

export const useAppointmentSchedulingForm = () => {
  const { register, handleSubmit, setValue, control } = useForm({
    defaultValues: {
      name: "",
      lastName: "",
      region: "",
      city: "",
      team: [
        {
          value: "",
          label: "",
        },
      ],
    },
  });

  const { errors } = useFormState({
    control,
  });

  return {
    control,
    register,
    handleSubmit,
    setValue,
    errors,
  };
};
