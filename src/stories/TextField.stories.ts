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

export const WithDefaultValue: Story = {
  args: {
    label: "outline",
    // defaultValue: "some text",
  },
};

export const error: Story = {
  args: {
    label: "outline",
    error: true,
  },
};
export const WithErrorAndValue: Story = {
  args: {
    label: "outline",
    error: true,
    value: "some text",
  },
};
