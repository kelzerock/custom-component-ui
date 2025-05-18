import { render, screen } from "@testing-library/react";
import { useState } from "react";
import { CustomModal } from "./CustomModal";
import userEvent from "@testing-library/user-event";
import { Modal } from "../../models/enums";
import styles from "./CustomModal.module.scss";

const modalContent = "Modal content";
const TestComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)} data-testid={"button"}>
        Open modal
      </button>
      <CustomModal open={isOpen} onClose={() => setIsOpen(false)}>
        {modalContent}
      </CustomModal>
    </>
  );
};

describe("Check CustomModal component", () => {
  it("Should open the modal when clicking the button", async () => {
    render(<TestComponent />);

    const button = screen.getByTestId("button");
    await userEvent.click(button);

    expect(screen.getByText(modalContent)).toBeInTheDocument();
  });

  it("should close the modal when clicking outside", async () => {
    render(<TestComponent />);

    const button = screen.getByTestId("button");
    await userEvent.click(button);

    const wrapper = screen.getByTestId(Modal.wrapper);
    await userEvent.click(wrapper);

    expect(screen.queryByText(modalContent)).not.toBeInTheDocument();
  });

  it("should block scrolling when modal is open", async () => {
    render(<TestComponent />);

    const button = screen.getByText("Open modal");
    await userEvent.click(button);

    expect(document.body).toHaveClass(styles.lock);
  });

  it("should remove scroll block when modal is closed", async () => {
    render(<TestComponent />);

    const button = screen.getByText("Open modal");
    await userEvent.click(button);

    const wrapper = screen.getByTestId(Modal.wrapper);
    await userEvent.click(wrapper);

    expect(document.body).not.toHaveClass(styles.lock);
  });

  it("should close when Escape key is pressed", async () => {
    render(<TestComponent />);

    const button = screen.getByText("Open modal");
    await userEvent.click(button);

    await userEvent.keyboard("{Escape}");

    expect(screen.queryByText(modalContent)).not.toBeInTheDocument();
  });

  test("check UI snapshot", async () => {
    const { container } = render(<TestComponent />);
    const button = screen.getByText("Open modal");
    await userEvent.click(button);
    expect(container).toMatchSnapshot();
  });
});
