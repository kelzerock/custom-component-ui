import { CustomButton, CustomModal } from "custom-component-ui-kelzerock";
import { Wrapper } from "../Wrapper/Wrapper";
import { useState } from "react";

export const ModalModule = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Wrapper title="Modal">
      <CustomButton onClick={handleOpen} variant={"outlined"}>
        Open modal
      </CustomButton>
      <CustomModal onClose={handleClose} open={open}>
        This is modal
      </CustomModal>
    </Wrapper>
  );
};
