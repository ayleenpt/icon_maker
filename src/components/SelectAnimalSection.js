import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import BearImage from '../assets/Bear.png';
import BunnyImage from '../assets/Bunny.png';
import CatImage from '../assets/Cat.png';

function SelectAnimalSection() {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={BearImage} />
      <SelectItemButton image={BunnyImage} />
      <SelectItemButton image={CatImage} />
    </div>
  );
}

export default SelectAnimalSection;