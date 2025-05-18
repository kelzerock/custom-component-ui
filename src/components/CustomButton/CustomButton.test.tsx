import { ButtonSize, ButtonVariant } from "../../models/types";
import { CustomButton } from "./CustomButton";
import { fireEvent, render, screen } from "@testing-library/react";

describe("test CustomButton component", () => {
  test("check custom props variant and size", () => {
    render(
      <CustomButton variant="contained" size="small">
        Click Me
      </CustomButton>,
    );

    const button = screen.getByRole("button");

    expect(button.textContent).toEqual("Click Me");
    expect(button.classList.contains("contained")).toBe(true);
    expect(button.classList.contains("small")).toBe(true);
    expect(button.classList.contains("button")).toBe(true);
  });

  test("check casual props for button, without text", () => {
    const variantStyle: ButtonVariant = "outlined";
    const sizeStyle: ButtonSize = "large";
    render(
      <CustomButton
        variant={variantStyle}
        size={sizeStyle}
        type="button"
        disabled
      />,
    );

    const button = screen.getByRole("button");

    expect(button.textContent).toEqual("");
    expect(button.classList.contains(variantStyle)).toBe(true);
    expect(button.classList.contains(sizeStyle)).toBe(true);
    expect(button.classList.contains("button")).toBe(true);
    expect(button.hasAttribute("disabled")).toBe(true);
    expect(button.getAttribute("disabled")).toEqual("");
    expect(button.getAttribute("type")).toEqual("button");
  });

  test("check onClick event", () => {
    const handleClick = jest.fn();
    render(<CustomButton onClick={handleClick}>Click</CustomButton>);

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("check UI snapshot", () => {
    const { container } = render(<CustomButton>Snapshot</CustomButton>);
    expect(container).toMatchSnapshot();
  });
});
