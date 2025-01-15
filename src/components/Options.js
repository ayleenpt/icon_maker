import '../styles/Options.css';
import SelectAnimalSection from './SelectAnimalSection';
import SelectAccessorySection from './SelectAccessorySection';

function Options({ setSelectedAnimal, setSelectedAccessory, setSelectedBackground, setSelectedExtras }) {
  return (
    <header className="options-window">
      <div className="section">
        Animal
        <SelectAnimalSection setSelectedItem={setSelectedAnimal} />
      </div>
      <div className="section">
        Accessory
        <SelectAccessorySection setSelectedItem={setSelectedAccessory} />
      </div>
      <div className="section">
        Background
        <SelectAnimalSection setSelectedItem={setSelectedBackground} />
      </div>
      <div className="section">
        Extras
        <SelectAccessorySection setSelectedItem={setSelectedExtras} />
      </div>
    </header>
  );
}

export default Options;
