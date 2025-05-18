import { ButtonsModule } from "./ButtonsModule/ButtonsModule";
import { CheckboxModule } from "./CheckboxModule/CheckboxModule";
import { ModalModule } from "./ModalModule/ModalModule";
import { SelectModule } from "./SelectModule/SelectModule";
import "./styles.css";
import { SwitchModule } from "./SwitchModule/SwitchModule";
import { TextFieldModule } from "./TextFieldModule/TextFieldModule";

export const App = () => {
  return (
    <div className="wrapper">
      <h1>Custom components UI</h1>
      <ButtonsModule />
      <TextFieldModule />
      <SelectModule />
      <CheckboxModule />
      <SwitchModule />
      <ModalModule />
    </div>
  );
};
