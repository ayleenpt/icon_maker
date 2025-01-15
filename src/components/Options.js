import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';
import SelectAccessorySection from './SelectAccessorySection';

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
        <SelectAnimalSection onSelection={(item) => onSelection('background', item)} />
      </div>
      <div className="section">
        extras
        <SelectAccessorySection onSelection={(item) => onSelection('extras', item)} />
      </div>
    </header>
  );
}

export default Options;
