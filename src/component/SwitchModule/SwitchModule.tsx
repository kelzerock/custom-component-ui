import { CustomSwitch } from "custom-component-ui-kelzerock";
import { Wrapper } from "../Wrapper/Wrapper";

export const SwitchModule = () => {
  return (
    <Wrapper title="Switch">
      <CustomSwitch title="label" />
      <CustomSwitch title="label" required />
      <CustomSwitch title="disabled" checked disabled />
      <CustomSwitch title="red color" required color="red" />
    </Wrapper>
  );
};
