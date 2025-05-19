import type { Meta, StoryObj } from "@storybook/react";
import { CustomSelect } from "../components";

const meta: Meta<typeof CustomSelect> = {
  component: CustomSelect,
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Primary: Story = {
  args: {
    title: "age",
    options: [
      { value: 10, title: "ten" },
      { value: 20, title: "twenty" },
      { value: 30, title: "thirty" },
    ],
  },
};
export const WithoutTitle: Story = {
  args: {
    options: [
      { value: 10, title: "ten" },
      { value: 20, title: "twenty" },
      { value: 30, title: "thirty" },
    ],
  },
};
export const Disabled: Story = {
  args: {
    options: [
      { value: 10, title: "ten" },
      { value: 20, title: "twenty" },
      { value: 30, title: "thirty" },
    ],
    title: "age",
    disabled: true,
  },
};
export const WithSelectedOption: Story = {
  args: {
    options: [
      { value: 10, title: "ten" },
      { value: 20, title: "twenty", defaultSelect: true },
      { value: 30, title: "thirty" },
    ],
    title: "age",
  },
};
export const UncontrolledSelected: Story = {
  args: {
    options: [
      { value: 10, title: "ten" },
      { value: 20, title: "twenty" },
      { value: 30, title: "thirty" },
    ],
    value: 20,
    title: "age",
  },
};
