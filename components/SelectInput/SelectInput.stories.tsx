import type { Meta, StoryObj } from "@storybook/react";

import { SelectInput } from "./SelectInput";

const meta: Meta<typeof SelectInput> = {
  title: "Components/SelectInput",
  component: SelectInput,
};

export default meta;
type Story = StoryObj<typeof SelectInput>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Selecione uma opção",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
  },
};

export const WithoutOptions: Story = {
  args: {
    label: "Label",
    placeholder: "Selecione uma opção",
    options: [],
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    error: "Selecione pelo menos um item",
    placeholder: "Selecione uma opção",
    options: [
      { value: "1", label: "Option 1" },
      { value: "2", label: "Option 2" },
      { value: "3", label: "Option 3" },
    ],
  },
};
