import type { Meta, StoryObj } from "@storybook/react";

import { TotalScheduleValue } from "./TotalScheduleValue";

const meta: Meta<typeof TotalScheduleValue> = {
  title: "Components/TotalScheduleValue",
  component: TotalScheduleValue,
};

export default meta;
type Story = StoryObj<typeof TotalScheduleValue>;

export const Primary: Story = {
  args: {},
};
