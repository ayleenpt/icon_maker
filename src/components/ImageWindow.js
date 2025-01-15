import '../styles/ImageWindow.css';

function ImageWindow({ selectedAnimal, selectedAccessory, selectedBackground, selectedExtras }) {
  return (
    <div className="window">
      {selectedAnimal && <img src={selectedAnimal} alt="Selected Animal" />}
      {selectedAccessory && <img src={selectedAccessory} alt="Selected Accessory" />}
      {selectedBackground && <img src={selectedBackground} alt="Selected Background" />}
      {selectedExtras && <img src={selectedExtras} alt="Selected Extras" />}
    </div>
  );
}

export default ImageWindow;
