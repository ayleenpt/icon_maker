import '../styles/Options.css';
import Styles from '../styles/Styles.module.css';
import SelectAnimalButton from './SelectAnimalButton';
import BearImage from '../assets/Bear.png';
import BunnyImage from '../assets/Bunny.png';
import CatImage from '../assets/Cat.png';

function Options() {
  return(
    <header className="options-window">
      <div className={Styles.animalButtons}>
        <SelectAnimalButton image={BearImage} />
        <SelectAnimalButton image={BunnyImage} />
        <SelectAnimalButton image={CatImage} />
      </div>
    </header>
  );
}

export default Options;