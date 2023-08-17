import type { Meta, StoryObj } from "@storybook/react";

import { SubHeader } from "./SubHeader";

const meta: Meta<typeof SubHeader> = {
  title: "Components/SubHeader",
  component: SubHeader,
};

export default meta;
type Story = StoryObj<typeof SubHeader>;

export const Primary: Story = {
  args: {
    title: "Lorem Ipsum",
    subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
};
