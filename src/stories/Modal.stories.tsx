import type { Meta, StoryObj } from "@storybook/react";
import { CustomButton, CustomModal } from "../components";
import { useState } from "react";
import { CustomModalProps } from "../models/interfaces/custom-modal-props";

const meta: Meta<typeof CustomModal> = {
  component: CustomModal,
};

export default meta;

type Story = StoryObj<typeof CustomModal>;

const Template = (args: CustomModalProps) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <>
      <CustomButton variant={"outlined"} onClick={() => setIsOpen(true)}>
        Open modal
      </CustomButton>
      <CustomModal {...args} open={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export const Primary: Story = {
  render: (args) => <Template {...args} />,
  args: {
    open: false,
    children: (
      <div>
        <h1>hello world</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae
          enim sint consectetur ducimus quibusdam! Temporibus eaque voluptatibus
          atque pariatur fugit?
        </p>
      </div>
    ),
  },
};

export const OpenModal: Story = {
  render: (args) => <Template {...args} />,
  args: {
    open: true,
    children: "Some content",
  },
};
