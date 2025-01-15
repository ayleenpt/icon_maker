import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Sunglasses from '../assets/accessories/Sunglasses.png';
import Hat from '../assets/accessories/Hat.png';
import Bow from '../assets/accessories/Bow.png';
import Glasses from '../assets/accessories/Glasses.png';
import Monocle from '../assets/accessories/Monocle.png';
import TwoBows from '../assets/accessories/TwoBows.png';

function SelectAnimalSection() {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Sunglasses} />
      <SelectItemButton image={Bow} />
      <SelectItemButton image={Glasses} />
      <SelectItemButton image={Hat} />
      <SelectItemButton image={Monocle} />
      <SelectItemButton image={TwoBows} />
    </div>
  );
}

export default SelectAnimalSection;