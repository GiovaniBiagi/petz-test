import type { Meta, StoryObj } from "@storybook/react";

import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  title: "Components/Link",
  component: Link,
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    text: "Primary",
    variant: "primary",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    text: "Secondary",
    variant: "secondary",
    href: "#",
  },
};
