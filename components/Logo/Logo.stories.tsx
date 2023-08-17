import type { Meta, StoryObj } from "@storybook/react";

import { Logo } from "./Logo";

const meta: Meta<typeof Logo> = {
  title: "Components/Logo",
  component: Logo,
};

export default meta;
type Story = StoryObj<typeof Logo>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {},
};
