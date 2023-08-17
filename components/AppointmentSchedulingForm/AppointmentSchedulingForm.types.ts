import { Options } from "@/components/SelectInput/SelectInput.types";
import { Pokemon } from "@/types/Pokemon";

export type AppointmentSchedulingFormValues = {
  name?: string;
  lastName: string;
  region: string;
  city: string;
  date: string;
  time: string;
  team: Options[];
};

export type AppointmentSchedulingFormProps = {
  onSubmit: (data: any) => void
  availableDates: string[]
  regions: string[]
  pokemons: Pokemon[]
  fetching: boolean
}

export type UseAppointmentSchedulingForm = {
  pokemons: Pokemon[]
};
