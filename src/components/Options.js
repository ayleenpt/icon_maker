import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';

function Options() {
  return(
    <header className="options-window">
      <div className="section">
        animal
        <SelectAnimalSection />
      </div>
      <div className="section">
        accessory
        <SelectAnimalSection />
      </div>
      <div className="section">
        background
        <SelectAnimalSection />
      </div>
      <div className="section">
        extras
        <SelectAnimalSection />
      </div>
    </header>
  );
}

export default Options;