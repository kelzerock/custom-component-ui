import { Wrapper } from "../Wrapper/Wrapper";
import { CustomButton } from "custom-component-ui-kelzerock";

export const ButtonsModule = () => {
  return (
    <Wrapper title="Buttons">
      <CustomButton>Test small</CustomButton>
      <CustomButton size="medium">Test medium</CustomButton>
      <CustomButton size="large">Test medium</CustomButton>
      <CustomButton variant="outlined">Test small</CustomButton>
      <CustomButton variant="outlined" size="medium">
        Test medium
      </CustomButton>
      <CustomButton variant="outlined" size="large">
        Test medium
      </CustomButton>
      <CustomButton variant="contained">Test small</CustomButton>
      <CustomButton variant="contained" size="medium">
        Test medium
      </CustomButton>
      <CustomButton variant="contained" size="large">
        Test medium
      </CustomButton>
    </Wrapper>
  );
};
