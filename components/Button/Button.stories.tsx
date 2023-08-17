import type { Meta, StoryObj } from "@storybook/react";
import { FiPlus } from "react-icons/fi";

import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary",
    variant: "secondary",
  },
};

export const WithIcon: Story = {
  args: {
    label: "With Icon",
    variant: "primary",
    icon: <FiPlus />,
  },
};
