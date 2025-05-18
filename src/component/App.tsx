import { ButtonsModule } from './ButtonsModule/ButtonsModule';
import './styles.css'
import { TextFieldModule } from './TextFieldModule/TextFieldModule';

export const App = () => {
  return <div className='wrapper'>
    <h1>Custom components UI</h1>
    <ButtonsModule />
    <TextFieldModule />
  </div>;
};
