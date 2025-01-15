import '../styles/ImageWindow.css';

function ImageWindow({ selectedAnimal, selectedAccessory, selectedBackground, selectedExtras }) {
  return (
    <div className="window">
      {selectedBackground && <img src={selectedBackground} alt="Selected Background" className="background" />}
      {selectedAnimal && <img src={selectedAnimal} alt="Selected Animal" className="animal" />}
      {selectedAccessory && <img src={selectedAccessory} alt="Selected Accessory" className="accessory" />}
      {selectedExtras &&
        selectedExtras.map((extra, index) => (
          <img key={index} src={extra} alt={`Extra ${index}`} className="extras" />
        ))}
    </div>
  );
}

export default ImageWindow;
