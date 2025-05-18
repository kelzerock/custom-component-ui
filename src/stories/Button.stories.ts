import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton } from "../components";

const meta: Meta<typeof CustomButton> = {
  component: CustomButton,
  parameters: {
    order: ["ContainedLarge", "ContainedMedium", "ContainedSmall"],
  },
};

export default meta;

type Story = StoryObj<typeof CustomButton>;

export const ContainedLarge: Story = {
  args: {
    children: "click me",
    variant: "contained",
    size: "large",
  },
};
export const ContainedMedium: Story = {
  args: {
    children: "click me",
    variant: "contained",
    size: "medium",
  },
};
export const ContainedSmall: Story = {
  args: {
    children: "click me",
    variant: "contained",
    size: "small",
  },
};

export const OutlineLarge: Story = {
  args: {
    children: "click me",
    variant: "outlined",
    size: "large",
  },
};
export const OutlineMedium: Story = {
  args: {
    children: "click me",
    variant: "outlined",
    size: "medium",
  },
};
export const OutlineSmall: Story = {
  args: {
    children: "click me",
    variant: "outlined",
    size: "small",
  },
};
export const TextLarge: Story = {
  args: {
    children: "click me",
    variant: "text",
    size: "large",
  },
};
export const TextMedium: Story = {
  args: {
    children: "click me",
    variant: "text",
    size: "medium",
  },
};
export const TextSmall: Story = {
  args: {
    children: "click me",
    variant: "text",
    size: "small",
  },
};
