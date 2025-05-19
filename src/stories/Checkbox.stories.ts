import type { Meta, StoryObj } from "@storybook/react";
import { CustomCheckbox } from "../components";

const meta: Meta<typeof CustomCheckbox> = {
  component: CustomCheckbox,
};

export default meta;

type Story = StoryObj<typeof CustomCheckbox>;

export const Primary: Story = {
  args: {
    title: "test",
  },
};
export const Required: Story = {
  args: {
    title: "test",
    required: true,
  },
};
export const DisabledChecked: Story = {
  args: {
    title: "Test",
    disabled: true,
    checked: true,
  },
};
export const DisabledUnchecked: Story = {
  args: {
    title: "Test",
    disabled: true,
    checked: false,
  },
};
export const CustomColor: Story = {
  args: {
    title: "Test",
    checked: true,
    color: "green",
  },
};
