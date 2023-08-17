import type { Meta, StoryObj } from "@storybook/react";

import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    id: "name",
    label: "Nome",
    placeholder: "Digite seu nome",
  },
};

export const WithError: Story = {
  args: {
    id: "name",
    label: "Nome",
    placeholder: "Digite seu nome",
    error: "Este campo é obrigatório",
  },
};
