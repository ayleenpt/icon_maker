import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Blue from '../assets/backgrounds/Blue.png';
import Green from '../assets/backgrounds/Green.png';
import Purple from '../assets/backgrounds/Purple.png';
import Yellow from '../assets/backgrounds/Yellow.png';

function SelectBackgroundSection({ onSelection }) {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Blue} altText={"Blue"} onClick={() => onSelection(Blue)} />
      <SelectItemButton image={Green} altText={"Green"} onClick={() => onSelection(Green)} />
      <SelectItemButton image={Purple} altText={"Purple"} onClick={() => onSelection(Purple)} />
      <SelectItemButton image={Yellow} altText={"Yellow"} onClick={() => onSelection(Yellow)} />
    </div>
  );
}

export default SelectBackgroundSection;
