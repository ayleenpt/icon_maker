import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Bear from '../assets/animals/Bear.png';
import Bunny from '../assets/animals/Bunny.png';
import Cat from '../assets/animals/Cat.png';

function SelectAnimalSection({ setSelectedItem }) {
  const handleSelect = (image) => {
    setSelectedItem(image);
  };

  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Bear} altText={"Bear"} onSelect={handleSelect} />
      <SelectItemButton image={Bunny} altText={"Bunny"} onSelect={handleSelect} />
      <SelectItemButton image={Cat} altText={"Cat"} onSelect={handleSelect} />
    </div>
  );
}

export default SelectAnimalSection;
