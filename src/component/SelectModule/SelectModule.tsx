import { CustomSelect } from "custom-component-ui-kelzerock";
import { Wrapper } from "../Wrapper/Wrapper";
import "./SelectModule.css";
import { OptionsData } from "custom-component-ui-kelzerock/build/models/interfaces";

const slugOptions: OptionsData[] = [
  { value: 1, title: "one", id: 1 },
  { value: 2, title: "two", id: 2 },
  { value: 3, title: "three", id: 3 },
];
export const SelectModule = () => {
  return (
    <Wrapper title="Select">
      <CustomSelect title="title" options={slugOptions} />
    </Wrapper>
  );
};
