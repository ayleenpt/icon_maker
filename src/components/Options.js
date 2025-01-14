import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';

function Options() {
  return(
    <header className="options-window">
      <div className="section-title">
        animal
        <SelectAnimalSection />
      </div>
    </header>
  );
}

export default Options;