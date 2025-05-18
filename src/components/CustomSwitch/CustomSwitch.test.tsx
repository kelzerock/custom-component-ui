import { render, screen } from "@testing-library/react";
import { Switch } from "../../models/enums";
import styles from "./CustomSwitch.module.scss";
import userEvent from "@testing-library/user-event";
import { CustomSwitch } from "./CustomSwitch";

describe("Check CustomSwitch component", () => {
  it("All elements CustomSwitch rendered", () => {
    const titleTest = "text";
    render(<CustomSwitch title={titleTest} />);

    const wrapper = screen.getByTestId(Switch.wrapper);
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(styles.wrapper);

    const switchBox = screen.getByTestId(Switch.switchBox);
    expect(switchBox).toBeInTheDocument();
    expect(switchBox).toHaveClass(styles.switchBox);

    const switchTest = screen.getByTestId(Switch.switch);
    expect(switchTest).toBeInTheDocument();
    expect(switchTest).toHaveClass(styles.switch);

    const switchDash = screen.getByTestId(Switch.switchDash);
    expect(switchDash).toBeInTheDocument();
    expect(switchDash).toHaveClass(styles.switchDash);

    const switchPoint = screen.getByTestId(Switch.switchPoint);
    expect(switchPoint).toBeInTheDocument();
    expect(switchPoint).toHaveClass(styles.switchPoint);

    const checkbox = screen.getByTestId(Switch.input);
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveClass(styles.checkbox);

    const title = screen.getByTestId(Switch.title);
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass(styles.title);
  });

  it("Title doesn't rendered without props", () => {
    render(<CustomSwitch />);
    const title = screen.queryByTestId(Switch.title);
    expect(title).toBeNull();
  });

  it("Disable state correctly rendered", () => {
    render(<CustomSwitch disabled />);
    const wrapper = screen.getByTestId(Switch.wrapper);
    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass(styles.disabled);
    const checkbox = screen.getByTestId(Switch.input);
    expect(checkbox).toHaveAttribute("disabled");
  });

  it("Checked state correctly rendered when checked equal true", () => {
    render(<CustomSwitch checked />);
    const checkbox = screen.getByTestId(Switch.input);
    expect(checkbox).toHaveAttribute("checked");
  });

  it("Checked status correctly rendered when checked equal false", () => {
    render(<CustomSwitch checked={false} />);
    const checkbox = screen.getByTestId(Switch.input);
    expect(checkbox).not.toHaveAttribute("checked");
  });

  it("Correctly changed status checkbox", async () => {
    render(<CustomSwitch />);
    const checkbox = screen.getByTestId(Switch.input);
    expect(checkbox).toBeInTheDocument();
    const wrapper = screen.getByTestId(Switch.wrapper);
    expect(wrapper).toBeInTheDocument();

    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error("Checkbox is not an instance of HTMLInputElement");
    }

    expect(checkbox.checked).toBe(false);
    expect(wrapper).not.toHaveClass(styles.checked);
    await userEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(wrapper).toHaveClass(styles.checked);
    await userEvent.click(checkbox);
    expect(wrapper).not.toHaveClass(styles.checked);
    expect(checkbox.checked).toBe(false);
  });

  it("Checkbox's state toggles when clicking on label", async () => {
    render(<CustomSwitch title="Click me" />);
    const wrapper = screen.getByTestId(Switch.wrapper);
    const checkbox = screen.getByTestId(Switch.input);

    if (!(checkbox instanceof HTMLInputElement)) {
      throw new Error("Checkbox is not an instance of HTMLInputElement");
    }

    expect(checkbox.checked).toBe(false);
    await userEvent.click(wrapper);
    expect(checkbox.checked).toBe(true);
  });

  test("Check UI snapshot", () => {
    const { container } = render(<CustomSwitch title="Test" color="green" />);
    expect(container).toMatchSnapshot();
  });
});
