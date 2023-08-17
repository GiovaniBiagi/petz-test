import type { Meta, StoryObj } from "@storybook/react";

import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
  args: {},
};
