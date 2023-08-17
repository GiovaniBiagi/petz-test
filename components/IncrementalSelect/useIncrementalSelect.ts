import { useState } from "react";
import { Control, FieldValues, useFieldArray } from "react-hook-form";

type UseIncrementalSelectProps = {
  control: Control<FieldValues>;
  fieldPrefix: string;
};

export function useIncrementalSelect({
  control,
  fieldPrefix,
}: UseIncrementalSelectProps) {
  const [disableAddition, setDisableAddition] = useState(false);
  const {
    fields: selectList,
    append,
    remove,
  } = useFieldArray({
    control,
    name: fieldPrefix,
  });

  const handleAddSelect = () => {
    if (selectList.length === 5) {
      setDisableAddition(true);
    }

    append({ label: "", value: "" });
  };

  const handleDeleteSelect = (index: number) => remove(index);

  return {
    selectList,
    handleAddSelect,
    handleDeleteSelect,
    disableAddition,
  };
}
