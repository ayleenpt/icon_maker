import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Bear from '../assets/animals/Bear.png';
import Bunny from '../assets/animals/Bunny.png';
import Cat from '../assets/animals/Cat.png';

function SelectAnimalSection({ onSelection }) {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Bear} altText={"Bear"} onClick={() => onSelection(Bear)} />
      <SelectItemButton image={Bunny} altText={"Bunny"} onClick={() => onSelection(Bunny)} />
      <SelectItemButton image={Cat} altText={"Cat"} onClick={() => onSelection(Cat)} />
    </div>
  );
}

export default SelectAnimalSection;
