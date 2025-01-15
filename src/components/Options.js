import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';
import SelectAccessorySection from './SelectAccessorySection';
import SelectBackgroundSection from './SelectBackgroundSection';
import SelectExtrasSection from './SelectExtrasSection';

function Options({ onSelection }) {
  return (
    <header className="options-window">
      <div className="section">
        animal
        <SelectAnimalSection onSelection={(item) => onSelection('animal', item)} />
      </div>
      <div className="section">
        accessory
        <SelectAccessorySection onSelection={(item) => onSelection('accessory', item)} />
      </div>
      <div className="section">
        background
        <SelectBackgroundSection onSelection={(item) => onSelection('background', item)} />
      </div>
      <div className="section">
        extras
        <SelectExtrasSection onSelection={(item) => onSelection('extras', item)} />
      </div>
    </header>
  );
}

export default Options;
