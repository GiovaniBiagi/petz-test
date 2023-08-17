import type { Meta, StoryObj } from "@storybook/react";

import { FeedbackCard } from "./FeedbackCard";

const meta: Meta<typeof FeedbackCard> = {
  title: "Components/FeedbackCard",
  component: FeedbackCard,
};

export default meta;

type Story = StoryObj<typeof FeedbackCard>;

export const Default: Story = {
  args: {
    message: "Mensagem de feedback",
    type: "success",
    actionLink: "Action Link",
    title: "Título",
    actionLinkLabel: "Ação",
  },
};

export const Error: Story = {
  args: {
    message: "Mensagem de feedback",
    type: "error",
    actionLink: "Action Link",
    title: "Título",
    actionLinkLabel: "Ação",
  },
};
