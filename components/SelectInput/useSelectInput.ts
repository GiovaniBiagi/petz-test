import { useCallback, useState } from "react";

export const useSelectInput = () => {
  const [value, setValue] = useState<string | number>("");
  const [isOpen, setIsOpen] = useState(false);

  const onOptionChange = useCallback(
    (selectedValue: string | number) => setValue(selectedValue),
    []
  );

  const reset = () => {
    setValue("");
  };

  const handleToggleSelect = () => setIsOpen(!isOpen);

  return {
    value,
    onOptionChange,
    reset,
    isOpen,
    handleToggleSelect,
  };
};
