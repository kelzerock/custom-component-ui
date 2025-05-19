import type { Meta, StoryObj } from "@storybook/react";

import { CustomTextField } from "../components";

const meta: Meta<typeof CustomTextField> = {
  component: CustomTextField,
};

export default meta;

type Story = StoryObj<typeof CustomTextField>;

export const Primary: Story = {
  args: {
    label: "outline",
  },
};

export const WithText: Story = {
  args: {
    label: "outline",
    value: "some text",
  },
};

export const error: Story = {
  args: {
    label: "outline",
    error: true,
  },
};
export const errorWithText: Story = {
  args: {
    label: "outline",
    error: true,
    value: "some text",
  },
};
