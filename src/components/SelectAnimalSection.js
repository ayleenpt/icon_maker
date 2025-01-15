import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Bear from '../assets/animals/Bear.png';
import Bunny from '../assets/animals/Bunny.png';
import Cat from '../assets/animals/Cat.png';

function SelectAnimalSection() {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Bear} />
      <SelectItemButton image={Bunny} />
      <SelectItemButton image={Cat} />
    </div>
  );
}

export default SelectAnimalSection;