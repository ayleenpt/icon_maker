import React, { useState } from 'react';
import '../styles/Folder.css';
import ImageWindow from './ImageWindow';
import Options from './Options';

function Folder() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [selectedAccessory, setSelectedAccessory] = useState(null);
  const [selectedBackground, setSelectedBackground] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState(null);

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
        <Options
          setSelectedAnimal={setSelectedAnimal}
          setSelectedAccessory={setSelectedAccessory}
          setSelectedBackground={setSelectedBackground}
          setSelectedExtras={setSelectedExtras}
        />
      </div>
    </div>
  );
};

export default Folder;