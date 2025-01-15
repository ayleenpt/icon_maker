import SelectItemButton from "./SelectItemButton";
import Styles from '../styles/Styles.module.css';
import Angry from '../assets/extras/Angry.png';
import Eyebrows from '../assets/extras/Eyebrows.png';
import Frown from '../assets/extras/Frown.png';
import Mustache from '../assets/extras/Mustache.png';
import Smile from '../assets/extras/Smile.png';
import Sparkles from '../assets/extras/Sparkles.png';

function SelectExtrasSection({ onSelection }) {
  return (
    <div className={Styles.buttons}>
      <SelectItemButton image={Angry} altText={"Angry"}  onClick={() => onSelection(Angry)} />
      <SelectItemButton image={Eyebrows} altText={"Eyebrows"}  onClick={() => onSelection(Eyebrows)} />
      <SelectItemButton image={Frown} altText={"Frown"}  onClick={() => onSelection(Frown)} />
      <SelectItemButton image={Mustache} altText={"Mustache"}  onClick={() => onSelection(Mustache)} />
      <SelectItemButton image={Smile} altText={"Smile"}  onClick={() => onSelection(Smile)} />
      <SelectItemButton image={Sparkles} altText={"Sparkles"}  onClick={() => onSelection(Sparkles)} />
    </div>
  );
}

export default SelectExtrasSection;