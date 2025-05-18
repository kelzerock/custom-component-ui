import { Wrapper } from "../Wrapper/Wrapper";
import { CustomTextField } from "custom-component-ui-kelzerock";

export const TextFieldModule = () => {
  return (
    <Wrapper title="Textfield">
      <CustomTextField label="label" />
      <CustomTextField label="test" />
      <CustomTextField label="test" error />
    </Wrapper>
  );
};
