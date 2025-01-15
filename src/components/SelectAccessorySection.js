import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Sunglasses from '../assets/accessories/Sunglasses.png';
import Hat from '../assets/accessories/Hat.png';
import Bow from '../assets/accessories/Bow.png';
import Glasses from '../assets/accessories/Glasses.png';
import Monocle from '../assets/accessories/Monocle.png';
import TwoBows from '../assets/accessories/TwoBows.png';

function SelectAnimalSection({ onSelection }) {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Sunglasses} altText={"Sunglasses"}  onClick={() => onSelection(Sunglasses)} />
      <SelectItemButton image={Bow} altText={"Bow"}  onClick={() => onSelection(Bow)} />
      <SelectItemButton image={Glasses} altText={"Glasses"}  onClick={() => onSelection(Glasses)} />
      <SelectItemButton image={Hat} altText={"Hat"}  onClick={() => onSelection(Hat)} />
      <SelectItemButton image={Monocle} altText={"Monocle"}  onClick={() => onSelection(Monocle)} />
      <SelectItemButton image={TwoBows} altText={"Two Bows"}  onClick={() => onSelection(TwoBows)} />
    </div>
  );
}

export default SelectAnimalSection;