import { Control, FieldValues } from "react-hook-form";
import { Options } from "../SelectInput/SelectInput.types";

export type IncrementalSelectProps = {
  name: string;
  label: string;
  control: Control<FieldValues>;
  options: Options[];
  placeholder?: string;
  onChange?: (value: string, index: number) => void;
};
