import { Wrapper } from "../Wrapper/Wrapper";
import {
  CustomCheckbox,
  CustomModal,
  CustomSelect,
  CustomSwitch,
  CustomTextField,
} from "custom-component-ui-kelzerock";

export const TextFieldModule = () => {
  return (
    <Wrapper title="Textfield">
      test
      {/* <CustomCheckbox title="Test" /> */}
      {/* <CustomModal >check</CustomModal> */}
      {/* <CustomSelect /> */}
      {/* <CustomSwitch /> */}
      <CustomTextField title="test" />
      {/* <CustomCheckbox title="Test" required />
      <CustomCheckbox title="Test" disabled /> */}
    </Wrapper>
  );
};
