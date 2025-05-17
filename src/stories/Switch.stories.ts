import { Meta, StoryObj } from "@storybook/react/*";
import { CustomSwitch } from "../components";

const meta: Meta<typeof CustomSwitch> = {
  component: CustomSwitch,
};

export default meta;

type Story = StoryObj<typeof CustomSwitch>;

export const Primary: Story = {
  args: {
    title: "Test",
  },
};
export const CustomColor: Story = {
  args: {
    title: "Test",
    color: "green",
  },
};
export const DisabledOff: Story = {
  args: {
    title: "Test",
    disabled: true,
  },
};
export const DisabledOn: Story = {
  args: {
    title: "Test",
    disabled: true,
    checked: true,
  },
};
export const Required: Story = {
  args: {
    title: "Required",
    required: true,
  },
};
