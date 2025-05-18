import { CustomSelect } from "custom-component-ui-kelzerock";
import { Wrapper } from "../Wrapper/Wrapper";
import { OptionsData } from "custom-component-ui-kelzerock/build/models/interfaces";

const slugOptions: OptionsData[] = [
  { value: 1, title: "one" },
  { value: 2, title: "two" },
  { value: 3, title: "three" },
];
export const SelectModule = () => {
  return (
    <Wrapper title="Select">
      <CustomSelect title="title" options={slugOptions} />
      <CustomSelect title="title" required options={slugOptions} />
      <CustomSelect title="title" required disabled options={slugOptions} />
      <CustomSelect
        title="title"
        required
        disabled
        options={[
          ...slugOptions,
          {
            value: 4,
            title: "four",
            defaultSelect: true,
          },
        ]}
      />
    </Wrapper>
  );
};
