import React, { useState } from 'react';
import '../styles/Folder.css';
import ImageWindow from './ImageWindow';
import Options from './Options';
import ExportButton from './ExportButton';

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

  const flattenAndDownload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    const width = 512;
    const height = 512;
    canvas.width = width;
    canvas.height = height;

    if (selectedBackground) {
      const backgroundImg = new Image();
      backgroundImg.src = selectedBackground;
      ctx.drawImage(backgroundImg, 0, 0, width, height);
    }
  
    if (selectedAnimal) {
      const animalImg = new Image();
      animalImg.src = selectedAnimal;
      ctx.drawImage(animalImg, 0, 0, width, height);
    }
  
    if (selectedAccessory) {
      const accessoryImg = new Image();
      accessoryImg.src = selectedAccessory;
      ctx.drawImage(accessoryImg, 0, 0, width, height);
    }
  
    if (selectedExtras.length > 0) {
      selectedExtras.forEach((extra) => {
        const extraImg = new Image();
        extraImg.src = extra;
        ctx.drawImage(extraImg, 0, 0, width, height);
      });
    }
  
    const png = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = png;
    link.download = 'icon.png';
    link.click();
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
        <ExportButton onClick={flattenAndDownload} text={"download image"}/>
      </div>
    </div>
  );
}

export default Folder;
