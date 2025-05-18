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
const TemplateMoreContent = (args: CustomModalProps) => {
  const [isOpen, setIsOpen] = useState(args.open);

  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ipsum
        iusto modi temporibus ipsam voluptatem aspernatur soluta rem praesentium
        eius, ducimus pariatur quae commodi eveniet alias incidunt rerum laborum
        distinctio quia debitis ex eaque laudantium dolore. Molestiae porro
        eaque ut quas incidunt nostrum? Consequatur, assumenda eos? Est quasi
        voluptate nam deleniti vel eveniet enim assumenda eum similique esse!
        Recusandae beatae amet eligendi aliquid magnam eos maiores accusantium,
        quis rem ea vitae mollitia quo, officia a ab quae facilis nemo
        voluptatum, earum culpa soluta placeat voluptatibus itaque quidem.
        Libero voluptatibus similique modi dolorum ipsa voluptatum fugit ex
        earum reprehenderit accusamus ipsum rerum eveniet ea doloremque unde
        saepe, molestiae quod pariatur explicabo commodi in iure illum impedit?
        Necessitatibus fuga autem maiores deserunt natus error velit magni
        debitis earum fugiat dolor laudantium atque omnis quam, consequuntur,
        alias quae explicabo culpa officia quaerat architecto mollitia corporis
        a voluptatem? Consequatur perspiciatis aliquid animi impedit accusantium
        voluptates unde dolore nemo reprehenderit excepturi sunt iure aperiam
        qui voluptatem omnis soluta nam, vel quae eius sintue ut quas incidunt
        nostrum? Consequatur, assumenda eos? Est quasi voluptate nam deleniti
        vel eveniet enim assumenda eum similique esse! Recusandae beatae amet
        eligendi aliquid magnam eos maiores accusantium, quis rem ea vitae
        mollitia quo, officia a ab quae facilis nemo voluptatum, earum culpa
        soluta placeat voluptatibus itaque quidem. Libero voluptatibus similique
        modi dolorum ipsa voluptatum fugit ex earum reprehenderit accusamus
        ipsum rerum eveniet ea doloremque unde saepe, molestiae quod pariatur
        explicabo commodi in iure illum impedit? Necessitatibus fuga autem
        maiores deserunt natus error velit magni debitis earum fugiat dolor
        laudantium atque omnis quam, consequuntur, alias quae explicabo culpa
        officia quaerat architecto mollitia corporis a voluptatem? Consequatur
        perspiciatis aliquid animi impedit accusantium voluptates unde dolore
        nemo reprehenderit excepturi sunt iure aperiam qui voluptatem omnis
        soluta nam, vel quae eius sintue ut quas incidunt nostrum? Consequatur,
        assumenda eos? Est quasi voluptate nam deleniti vel eveniet enim
        assumenda eum similique esse! Recusandae beatae amet eligendi aliquid
        magnam eos maiores accusantium, quis rem ea vitae mollitia quo, officia
        a ab quae facilis nemo voluptatum, earum culpa soluta placeat
        voluptatibus itaque quidem. Libero voluptatibus similique modi dolorum
        ipsa voluptatum fugit ex earum reprehenderit accusamus ipsum rerum
        eveniet ea doloremque unde saepe, molestiae quod pariatur explicabo
        commodi in iure illum impedit? Necessitatibus fuga autem maiores
        deserunt natus error velit magni debitis earum fugiat dolor laudantium
        atque omnis quam, consequuntur, alias quae explicabo culpa officia
        quaerat architecto mollitia corporis a voluptatem? Consequatur
        perspiciatis aliquid animi impedit accusantium voluptates unde dolore
        nemo reprehenderit excepturi sunt iure aperiam qui voluptatem omnis
        soluta nam, vel quae eius sintue ut quas incidunt nostrum? Consequatur,
        assumenda eos? Est quasi voluptate nam deleniti vel eveniet enim
        assumenda eum similique esse! Recusandae beatae amet eligendi aliquid
        magnam eos maiores accusantium, quis rem ea vitae mollitia quo, officia
        a ab quae facilis nemo voluptatum, earum culpa soluta placeat
        voluptatibus itaque quidem. Libero voluptatibus similique modi dolorum
        ipsa voluptatum fugit ex earum reprehenderit accusamus ipsum rerum
        eveniet ea doloremque unde saepe, molestiae quod pariatur explicabo
        commodi in iure illum impedit? Necessitatibus fuga autem maiores
        deserunt natus error velit magni debitis earum fugiat dolor laudantium
        atque omnis quam, consequuntur, alias quae explicabo culpa officia
        quaerat architecto mollitia corporis a voluptatem? Consequatur
        perspiciatis aliquid animi impedit accusantium voluptates unde dolore
        nemo reprehenderit excepturi sunt iure aperiam qui voluptatem omnis
        soluta nam, vel quae eius sintue ut quas incidunt nostrum? Consequatur,
        assumenda eos? Est quasi voluptate nam deleniti vel eveniet enim
        assumenda eum similique esse! Recusandae beatae amet eligendi aliquid
        magnam eos maiores accusantium, quis rem ea vitae mollitia quo, officia
        a ab quae facilis nemo voluptatum, earum culpa soluta placeat
        voluptatibus itaque quidem. Libero voluptatibus similique modi dolorum
        ipsa voluptatum fugit ex earum reprehenderit accusamus ipsum rerum
        eveniet ea doloremque unde saepe, molestiae quod pariatur explicabo
        commodi in iure illum impedit? Necessitatibus fuga autem maiores
        deserunt natus error velit magni debitis earum fugiat dolor laudantium
        atque omnis quam, consequuntur, alias quae explicabo culpa officia
        quaerat architecto mollitia corporis a voluptatem? Consequatur
        perspiciatis aliquid animi impedit accusantium voluptates unde dolore
        nemo reprehenderit excepturi sunt iure aperiam qui voluptatem omnis
        soluta nam, vel quae eius sint alias sapiente aut numquam voluptas.
        Voluptatum itaque maiores beatae ad incidunt in accusantium, dolore iste
        at placeat reprehenderit quod tempora quos dolorem. Nihil obcaecati ex
        aspernatur animi quae? Exercitationem voluptatum impedit voluptas.
      </p>
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
export const MoreContentOnThePage: Story = {
  render: (args) => <TemplateMoreContent {...args} />,
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
