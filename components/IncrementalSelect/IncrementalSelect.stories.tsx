import type { Meta, StoryObj } from "@storybook/react";

import { IncrementalSelect } from "./IncrementalSelect";

const meta: Meta<typeof IncrementalSelect> = {
  title: "Components/IncrementalSelect",
  component: IncrementalSelect,
};

export default meta;
type Story = StoryObj<typeof IncrementalSelect>;

//👇 Throws a type error it the args don't match the component props
export const Default: Story = {
  args: {},
};
