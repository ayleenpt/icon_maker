import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';

function Options() {
  return(
    <header className="options-window">
      <div className="section">
        animal
        <SelectAnimalSection />
      </div>
    </header>
  );
}

export default Options;