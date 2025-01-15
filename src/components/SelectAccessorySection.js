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
      <SelectItemButton image={Sunglasses} altText={"Sunglasses"} />
      <SelectItemButton image={Bow} altText={"Bow"} />
      <SelectItemButton image={Glasses} altText={"Glasses"} />
      <SelectItemButton image={Hat} altText={"Hat"} />
      <SelectItemButton image={Monocle} altText={"Monocle"} />
      <SelectItemButton image={TwoBows} altText={"Two Bows"} />
    </div>
  );
}

export default SelectAnimalSection;