import { render, screen } from "@testing-library/react";
import { CustomSelect } from "./CustomSelect";
import { OptionsData } from "../../models/interfaces";

describe("check CustomSelect", () => {
  test("check title correctly rendered", () => {
    const value = "test value";
    render(<CustomSelect title={value} />);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(value);
    expect(title).toHaveClass("title");
  });

  test("check title doesn't render without props", () => {
    render(<CustomSelect />);
    const title = screen.queryByTestId("title");
    expect(title).toBeNull();
  });

  test("check options correct render", () => {
    const options: OptionsData[] = [
      {
        id: 1,
        title: "one",
        value: 1,
      },
      {
        id: 2,
        title: "two",
        value: 2,
      },
      {
        id: 3,
        title: "three",
        value: 3,
      },
    ];
    render(<CustomSelect options={options} />);
    const optionsTest =
      (screen.queryAllByTestId("option") as HTMLOptionElement[]) || null;
    expect(
      optionsTest.every((option) =>
        options.some(
          (el) =>
            String(el.title) === option.textContent &&
            String(el.value) === option.value,
        ),
      ),
    ).toBe(true);
    const defaultOption = screen.getByTestId(
      "defaultOption",
    ) as HTMLOptionElement;
    expect(
      defaultOption.value === "" && defaultOption.textContent === "",
    ).toBeTruthy();
  });

  test("check UI snapshot", () => {
    const { container } = render(<CustomSelect title="age" />);
    expect(container).toMatchSnapshot();
  });
});
