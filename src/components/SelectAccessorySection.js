import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Sunglasses from '../assets/accessories/Sunglasses.png';
import Hat from '../assets/accessories/Hat.png';
import Bow from '../assets/accessories/Bow.png';
import Glasses from '../assets/accessories/Glasses.png';
import Monocle from '../assets/accessories/Monocle.png';
import TwoBows from '../assets/accessories/TwoBows.png';

function SelectAnimalSection({ setSelectedItem }) {
  const handleSelect = (image) => {
    setSelectedItem(image);
  };

  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Sunglasses} altText={"Sunglasses"}  onSelect={handleSelect} />
      <SelectItemButton image={Bow} altText={"Bow"}  onSelect={handleSelect} />
      <SelectItemButton image={Glasses} altText={"Glasses"}  onSelect={handleSelect} />
      <SelectItemButton image={Hat} altText={"Hat"}  onSelect={handleSelect} />
      <SelectItemButton image={Monocle} altText={"Monocle"}  onSelect={handleSelect} />
      <SelectItemButton image={TwoBows} altText={"Two Bows"}  onSelect={handleSelect} />
    </div>
  );
}

export default SelectAnimalSection;