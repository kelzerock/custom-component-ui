import type { Meta, StoryObj } from "@storybook/react";
import { CustomSelect } from "../components/CustomSelect/CustomSelect";

const meta: Meta<typeof CustomSelect> = {
  component: CustomSelect,
};

export default meta;

type Story = StoryObj<typeof CustomSelect>;

export const Primary: Story = {
  args: {
    title: "age",
    options: [
      { value: 10, title: "ten", isSelected: false, id: 1 },
      { value: 20, title: "twenty", isSelected: false, id: 2 },
      { value: 30, title: "thirty", isSelected: false, id: 3 },
    ],
  },
};
export const WithoutTitle: Story = {
  args: {
    options: [
      { value: 10, title: "ten", isSelected: false, id: 1 },
      { value: 20, title: "twenty", isSelected: false, id: 2 },
      { value: 30, title: "thirty", isSelected: false, id: 3 },
    ],
  },
};
