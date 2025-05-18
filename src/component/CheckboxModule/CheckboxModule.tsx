import { CustomCheckbox } from "custom-component-ui-kelzerock";
import { Wrapper } from "../Wrapper/Wrapper";

export const CheckboxModule = () => {
  return (
    <Wrapper title="Checkbox">
      <CustomCheckbox title="label" />
      <CustomCheckbox title="label" required />
      <CustomCheckbox title="label" disabled checked />
    </Wrapper>
  );
};
