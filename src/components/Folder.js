import React, { useState } from 'react';
import '../styles/Folder.css';
import ImageWindow from './ImageWindow';
import Options from './Options';

function Folder() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);

  const handleSelection = (type, item) => {
    switch (type) {
      case 'animal':
        setSelectedAnimal(selectedAnimal === item ? null : item);
        break;
      case 'accessory':
        setSelectedAccessory(selectedAccessory === item ? null : item);
        break;
      case 'background':
        setSelectedBackground(selectedBackground === item ? null : item);
        break;
      case 'extras':
        setSelectedExtras((prevExtras) =>
          prevExtras.includes(item)
            ? prevExtras.filter((extra) => extra !== item)
            : [...prevExtras, item]
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <div className="folder_tab"></div>
      <div className="folder">
        <ImageWindow
          selectedAnimal={selectedAnimal}
          selectedAccessory={selectedAccessory}
          selectedBackground={selectedBackground}
          selectedExtras={selectedExtras}
        />
        <Options onSelection={handleSelection} />
      </div>
    </div>
  );
}

export default Folder;
