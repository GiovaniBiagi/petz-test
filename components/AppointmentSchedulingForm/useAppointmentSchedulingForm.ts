import { useEffect, useState } from "react";
import { useForm, useFormState, useWatch } from "react-hook-form";
import { Options } from "@/components/SelectInput/SelectInput.types";
import { getAvailableTime } from "@/services/schedule";
import { capitalizeFirstLetter } from "@/utils/capitalizeFirstLetter";
import { getCities } from "@/services/pokemon";
import { City } from "@/types/City";
import { calculateTaxes } from "@/utils/calculateTaxes";
import { Pokemon } from "@/types/Pokemon";
import { formatCurrency } from "@/utils/formatCurrency";
import { AppointmentSchedulingFormValues, UseAppointmentSchedulingForm } from "./AppointmentSchedulingForm.types";

export const useAppointmentSchedulingForm = ({ pokemons }: UseAppointmentSchedulingForm) => {
  const [availableTime, setAvailableTime] = useState<Options[]>([]);
  const [cities, setCities] = useState<Options[]>([]);
  const [totalValues, setTotalValues] = useState({
    patients: 0,
    pricePerPatient: "",
    taxValue: "",
    subtotal: "",
    total: "",
  });

  const { register, handleSubmit, setValue, control, getValues, watch } = useForm<AppointmentSchedulingFormValues>({
    defaultValues: {
      name: "",
      lastName: "",
      region: "",
      city: "",
      date: "",
      time: "",
      team: [
        {
          value: "",
          label: "",
        },
      ],
    },
  });

  const { errors, } = useFormState({
    control,
  });

  const [date, region, team] = watch([
    "date",
    "region",
    "team"
  ]);

  const handleGetAvailableTimeByDate = async (date: string) => {
    try {

      const availableTimeResponse = await getAvailableTime(date);
      if (availableTimeResponse.data.length) {
        const availableTime = availableTimeResponse.data.map((time: string) => ({
          value: time,
          label: time,
        }));
        setAvailableTime(availableTime);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (date) {
      handleGetAvailableTimeByDate(date);
    }
  }, [date])

  useEffect(() => {
    if (team.length) {
      const patients = team.length;
      const pricePerPatient = 70;
      const taxMultiplier = Math.max(...pokemons.map((pokemon: Pokemon) => pokemon.generation));
      const taxValue = calculateTaxes(pricePerPatient, taxMultiplier) ?? 0;
      const subtotal = patients * pricePerPatient;
      const total = patients * pricePerPatient + taxValue;

      setTotalValues({
        patients,
        pricePerPatient: formatCurrency(pricePerPatient),
        taxValue: formatCurrency(taxValue),
        subtotal: formatCurrency(subtotal),
        total: formatCurrency(total),
      });
    }
  }, [team, pokemons])

  const handleGetCitiesByRegion = async (region: string) => {
    try {
      const citiesResponse = await getCities(region);
      if (citiesResponse.length) {
        const cities = citiesResponse.map((city: City) => {
          const spllitedCityName = city.name.split("-");

          return {
            value: city.name,
            label: capitalizeFirstLetter(spllitedCityName),
          }
        });
        setCities(cities);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (region) {
      handleGetCitiesByRegion(region);
    }
  }, [region])

  return {
    control,
    register,
    handleSubmit,
    setValue,
    errors,
    getValues,
    values: getValues(),
    availableTime,
    cities,
    totalValues,
  };
};
