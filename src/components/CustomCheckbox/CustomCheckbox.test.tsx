import { render, screen } from "@testing-library/react";
import { CustomCheckbox } from "./CustomCheckbox";
import { Checkbox } from "../../models/enums";
import styles from "./CustomCheckbox.module.scss";
import userEvent from "@testing-library/user-event";

describe("check CustomCheckbox component", () => {
  it("All elements CustomCheckbox rendered", () => {
    const titleTest = "text";
    render(<CustomCheckbox title={titleTest} />);

    const wrapper = screen.getByTestId(Checkbox.wrapper);
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(styles.wrapper);

    const checkbox = screen.getByTestId(Checkbox.checkbox);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass(styles.checkbox);

    const title = screen.getByTestId(Checkbox.title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(styles.title);
  });

  it("Title doesn't rendered without props", () => {
    render(<CustomCheckbox />);
    const title = screen.queryByTestId(Checkbox.title);
    expect(title).toBeNull();
  });

  it("Disable state correctly rendered", () => {
    render(<CustomCheckbox disabled />);
    const checkbox = screen.getByTestId(Checkbox.checkbox);
    expect(checkbox).toHaveAttribute("disabled");
  });

  it("Checked state correctly rendered when checked equal true", () => {
    render(<CustomCheckbox checked />);
    const checkbox = screen.getByTestId(Checkbox.checkbox);
    expect(checkbox).toHaveAttribute("checked");
  });

  it("Checked status correctly rendered when checked equal false", () => {
    render(<CustomCheckbox checked={false} />);
    const checkbox = screen.getByTestId(Checkbox.checkbox);
    expect(checkbox).not.toHaveAttribute("checked");
  });

  it("Correctly changed status checkbox", async () => {
    render(<CustomCheckbox />);
    const checkbox = screen.getByTestId(Checkbox.checkbox);
    expect(checkbox).toBeInTheDocument();

    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error("Checkbox is not an instance of HTMLInputElement");
    }

    expect(checkbox.checked).toBe(false);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(false);
  });

  it("toggles checkbox state when clicking on label", async () => {
    render(<CustomCheckbox title="Click me" />);
    const wrapper = screen.getByTestId(Checkbox.wrapper);
    const checkbox = screen.getByTestId(Checkbox.checkbox);

    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error("Checkbox is not an instance of HTMLInputElement");
    }

    expect(checkbox.checked).toBe(false);
    await userEvent.click(wrapper);
    expect(checkbox.checked).toBe(true);
  });

  test("check UI snapshot", () => {
    const { container } = render(<CustomCheckbox title="Test" color="green" />);
    expect(container).toMatchSnapshot();
  });
});
