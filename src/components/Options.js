import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';

function Options() {
  return(
    <header className="options-window">
      <div className="section-title">animal</div>
      <SelectAnimalSection />
    </header>
  );
}

export default Options;