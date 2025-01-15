import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Bear from '../assets/Animals/Bear.png';
import Bunny from '../assets/Animals/Bunny.png';
import Cat from '../assets/Animals/Cat.png';

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