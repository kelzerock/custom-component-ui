import { render, screen } from "@testing-library/react";
import { CustomTextField } from "./CustomTextField";
import { TextField } from "../../models/enums";
import styles from "./CustomTextField.module.scss";

describe("check CustomTextField", () => {
  test("check input element", () => {
    const value = "test value";
    render(<CustomTextField value={value} />);

    const textField = screen.getByTestId(TextField.input);
    expect(textField).toHaveAttribute("type", "text");
    expect(textField).toHaveAttribute("value", value);
    expect(textField).toHaveClass(styles.input);
  });

  test("check custom 'error' props", () => {
    render(<CustomTextField error={true} />);
    const wrapper = screen.getByTestId(TextField.wrapper);

    expect(wrapper).toHaveClass("error");
  });

  test("check UI snapshot", () => {
    const { container } = render(<CustomTextField label="test" error />);
    expect(container).toMatchSnapshot();
  });
});
